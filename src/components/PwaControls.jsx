import { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import '../styles/pwa.css';

export default function PwaControls() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [installing, setInstalling] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState('');
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    immediate: true,
    onRegisterError(error) {
      console.error('Portfolio offline support could not be registered:', error);
    },
  });

  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    const onInstallPrompt = (event) => {
      if (standalone) return;
      event.preventDefault();
      setInstallPrompt(event);
    };
    const onInstalled = () => setInstallPrompt(null);
    window.addEventListener('beforeinstallprompt', onInstallPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onInstallPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  async function install() {
    if (!installPrompt || installing) return;
    setInstalling(true);
    setError('');
    try {
      await installPrompt.prompt();
      await installPrompt.userChoice;
    } catch {
      setError('Installation could not start. Try your browser’s install menu.');
    } finally {
      // Browser install prompts can only be used once, including dismissals.
      setInstallPrompt(null);
      setInstalling(false);
    }
  }

  async function update() {
    setUpdating(true);
    setError('');
    try {
      await updateServiceWorker(true);
    } catch {
      setError('The update could not load. Reconnect and try again.');
    } finally {
      setUpdating(false);
    }
  }

  return <>
    {installPrompt && <button className="pwa-install" type="button" disabled={installing} onClick={install}>
      {installing ? 'Installing…' : 'Install app'}
    </button>}
    {(offlineReady || needRefresh || error) && <aside className="pwa-notice" aria-label="App notification">
      <p role="status">{error || (needRefresh ? 'A new version of the portfolio is available.' : 'The portfolio is ready to browse offline.')}</p>
      <div className="pwa-notice-actions">
        {needRefresh && <button type="button" disabled={updating} onClick={update}>{updating ? 'Updating…' : 'Update now'}</button>}
        <button type="button" className="pwa-dismiss" onClick={() => {
          setOfflineReady(false);
          setNeedRefresh(false);
          setError('');
        }}>{needRefresh ? 'Later' : 'Dismiss'}</button>
      </div>
    </aside>}
  </>;
}
