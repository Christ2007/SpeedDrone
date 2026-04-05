import { useEffect } from 'react';

const panelStyle = {
  animation: 'modalIn 0.2s ease-out both',
};

const keyframes = `
@keyframes modalIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

/**
 * PrivacyPolicy — Full-screen modal overlay for the privacy policy.
 * @param {function} onClose — Callback to close the modal.
 */
const PrivacyPolicy = ({ onClose }) => {
  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label="Privacy Policy"
    >
      <style>{keyframes}</style>

      {/* Backdrop — plain dark overlay, no blur for performance */}
      <div
        className="absolute inset-0 bg-black/85"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        style={panelStyle}
        className="relative z-10 w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl border border-red-700/40 bg-[#0D0D12] shadow-[0_0_40px_rgba(255,0,0,0.12)] overflow-hidden"
      >

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
            <h2 className="font-display font-bold tracking-widest text-white text-xl">
              PRIVACY POLICY
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Chiudi"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-8 py-6 space-y-6 text-slate-300 font-body text-sm leading-relaxed">
          <p className="text-slate-500 text-xs uppercase tracking-widest">
            Ultimo aggiornamento: Aprile 2026
          </p>

          <Section title="1. Titolare del Trattamento">
            <p>
              Il titolare del trattamento dei dati personali è <strong className="text-white">Christian Luongo</strong>,
              raggiungibile tramite il repository del progetto su{' '}
              <a
                href="https://github.com/Christ2007/SpeedDrone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors"
              >
                GitHub
              </a>.
            </p>
          </Section>

          <Section title="2. Dati Raccolti">
            <p>
              Il sito <strong className="text-white">SpeedDrone</strong> è un sito web informativo a carattere dimostrativo.
              Non raccogliamo né archiviamo alcun dato personale degli utenti tramite questo sito.
            </p>
            <p className="mt-2">
              Il sito non utilizza cookie di profilazione, strumenti di tracciamento di terze parti
              o sistemi di analisi comportamentale.
            </p>
          </Section>

          <Section title="3. Finalità del Trattamento">
            <p>
              In assenza di raccolta di dati, non vi è alcun trattamento di dati personali da dichiarare.
              L'unico scopo del sito è presentare il progetto SpeedDrone a visitatori e potenziali collaboratori.
            </p>
          </Section>

          <Section title="4. Cookie">
            <p>
              Questo sito non utilizza cookie propri né di terze parti. La navigazione avviene senza
              che vengano memorizzati identificatori o preferenze sul dispositivo dell'utente.
            </p>
          </Section>

          <Section title="5. Hosting e Trasferimento Dati">
            <p>
              Il sito è ospitato localmente o su infrastrutture standard. I log di accesso del server
              potrebbero contenere indirizzi IP in forma anonima, esclusivamente per scopi tecnici e
              di sicurezza, senza associazione a persone fisiche identificabili.
            </p>
          </Section>

          <Section title="6. Diritti dell'Utente">
            <p>
              Ai sensi del Regolamento Europeo 2016/679 (GDPR), l'utente ha il diritto di:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-slate-400">
              <li>accedere ai propri dati personali;</li>
              <li>ottenerne la rettifica o la cancellazione;</li>
              <li>opporsi al trattamento;</li>
              <li>richiedere la portabilità dei dati.</li>
            </ul>
            <p className="mt-2">
              Poiché non raccogliamo dati personali, l'esercizio di tali diritti non è applicabile
              in questo contesto. Per qualsiasi chiarimento, contattaci tramite GitHub.
            </p>
          </Section>

          <Section title="7. Modifiche alla Privacy Policy">
            <p>
              Ci riserviamo il diritto di aggiornare questa informativa in qualsiasi momento.
              Le modifiche saranno pubblicate in questa pagina con la data di aggiornamento.
            </p>
          </Section>
        </div>

        {/* Footer bar */}
        <div className="px-8 py-4 border-t border-white/5 bg-black/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-[0_0_16px_rgba(255,0,0,0.3)] hover:shadow-[0_0_24px_rgba(255,0,0,0.5)]"
          >
            Ho capito
          </button>
        </div>
      </div>
    </div>
  );
};

/** Small helper for policy sections */
const Section = ({ title, children }) => (
  <div>
    <h3 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
      <span className="w-1 h-4 rounded-full bg-red-600 inline-block" />
      {title}
    </h3>
    {children}
  </div>
);

export default PrivacyPolicy;
