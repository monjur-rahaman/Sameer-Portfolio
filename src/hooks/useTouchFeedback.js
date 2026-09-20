import { useEffect } from 'react';

const cards = '.community-card, .samir-project-card, .samir-project-contact, .home-work-card, .home-detail-card, .sp-paper, .research-item, .contact-card, .home-contact-card, .contact-info, .award, .event';

export default function useTouchFeedback() {
  useEffect(() => {
    let current;
    let pointer;
    let startX;
    let startY;
    let timer;

    const clear = () => {
      window.clearTimeout(timer);
      current?.removeAttribute('data-touch-feedback');
      current = null;
      pointer = null;
    };
    const down = (event) => {
      if (event.pointerType !== 'touch' && event.pointerType !== 'pen') return;
      clear();
      if (!event.isPrimary || !(event.target instanceof Element)) return;
      const target = event.target.closest('button, a[href]') || event.target.closest(cards);
      if (!target || !target.closest('#root') || target.matches(':disabled, [aria-disabled="true"]')) return;
      current = target;
      pointer = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      current.setAttribute('data-touch-feedback', '');
    };
    const move = (event) => {
      if (event.pointerId === pointer && Math.hypot(event.clientX - startX, event.clientY - startY) > 10) clear();
    };
    const up = (event) => {
      if (event.pointerId !== pointer) return;
      pointer = null;
      // Keep quick taps visible without delaying clicks or navigation.
      timer = window.setTimeout(clear, 180);
    };
    const cancel = (event) => { if (event.pointerId === pointer) clear(); };

    document.addEventListener('pointerdown', down, { passive: true });
    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerup', up, { passive: true });
    document.addEventListener('pointercancel', cancel, { passive: true });
    document.addEventListener('scroll', clear, { passive: true, capture: true });
    window.addEventListener('blur', clear);
    return () => {
      clear();
      document.removeEventListener('pointerdown', down);
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      document.removeEventListener('pointercancel', cancel);
      document.removeEventListener('scroll', clear, true);
      window.removeEventListener('blur', clear);
    };
  }, []);
}
