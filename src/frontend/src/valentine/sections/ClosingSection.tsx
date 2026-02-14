import Section from '../components/Section';

export default function ClosingSection() {
  return (
    <Section className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-950/20 dark:via-pink-950/20 dark:to-red-950/20">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          💖 Our First Valentine — Just the Beginning
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
          <p>
            This is our first Valentine together, Venya, but I promise it's only the beginning of many more. I want to laugh with you, grow with you, support you, protect you, and love you more every single day.
          </p>
          
          <p className="text-xl md:text-2xl font-semibold text-primary">
            I love you more than words could ever truly express.
          </p>
        </div>
        
        <div className="inline-block px-8 py-6 bg-card rounded-3xl shadow-xl box-glow">
          <p className="text-2xl md:text-3xl font-semibold mb-2">
            Forever Yours,
          </p>
          <p className="text-3xl md:text-4xl font-bold text-primary">
            Adhil 💖
          </p>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xl md:text-2xl font-semibold text-primary text-glow">
            You are my today, my tomorrow, and my forever ❤️
          </p>
        </div>
      </div>
    </Section>
  );
}
