import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
