import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import MayaWidget from '../MayaWidget';

vi.mock('@/api/maya', () => ({
  isMayaEnabled: () => true,
  sendMayaMessage: vi.fn(async () => ({ reply: 'ok' })),
  escalateToHuman: vi.fn(async () => ({})),
}));

vi.mock('@/api/issues', () => ({
  submitIssueReport: vi.fn(async () => ({})),
}));

describe('MayaWidget', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders floating button when closed', () => {
    render(<MayaWidget />);
    expect(screen.getByRole('button', { name: 'Open Maya' })).toBeInTheDocument();
  });

  it('opens panel and shows greeting', () => {
    render(<MayaWidget />);
    fireEvent.click(screen.getByRole('button', { name: 'Open Maya' }));
    expect(screen.getByText("👋 Hi, I'm Maya. How can I help you with Boreal Financial today?")).toBeInTheDocument();
  });

  it('shows only Talk to Human and Report Issue in bottom area', () => {
    render(<MayaWidget />);
    fireEvent.click(screen.getByRole('button', { name: 'Open Maya' }));

    const talk = screen.getByRole('button', { name: 'Talk to Human' });
    const report = screen.getByRole('button', { name: 'Report Issue' });

    expect(talk).toBeInTheDocument();
    expect(report).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Start Application/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Upload Documents/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Book Meeting/i })).not.toBeInTheDocument();

    const footer = talk.closest('div');
    expect(footer).toBeTruthy();
    expect(within(footer as HTMLElement).getAllByRole('button')).toHaveLength(2);
  });

  it('clicking Talk to Human triggers escalate endpoint call', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'ok', data: {} }),
    } as Response);

    render(<MayaWidget />);
    fireEvent.click(screen.getByRole('button', { name: 'Open Maya' }));
    fireEvent.click(screen.getByRole('button', { name: 'Talk to Human' }));

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith(
        expect.stringContaining('/api/maya/escalate'),
        expect.objectContaining({ method: 'POST' }),
      );
    });
  });

  it('submitting report issue triggers /api/client/issues with message', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'ok', data: {} }),
    } as Response);

    render(<MayaWidget />);
    fireEvent.click(screen.getByRole('button', { name: 'Open Maya' }));
    fireEvent.click(screen.getByRole('button', { name: 'Report Issue' }));

    fireEvent.change(screen.getByPlaceholderText('Describe the issue'), {
      target: { value: 'Something broke' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Send Report' }));

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledWith(
        expect.stringContaining('/api/client/issues'),
        expect.objectContaining({ method: 'POST' }),
      );
    });
  });
});
