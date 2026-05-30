export type SecurityDisclaimerProps = {
  text: string;
};

export function SecurityDisclaimer({ text }: SecurityDisclaimerProps) {
  return (
    <footer className="mx-auto max-w-3xl border-t border-slate-200 pt-10 pb-4">
      <p className="text-sm leading-relaxed text-slate-500">{text}</p>
    </footer>
  );
}
