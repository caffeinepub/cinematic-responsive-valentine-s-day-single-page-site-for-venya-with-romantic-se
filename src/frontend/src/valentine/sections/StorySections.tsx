import Section from '../components/Section';
import SunsetBackdrop from '../components/ambient/SunsetBackdrop';
import HeartbeatBackdrop from '../components/ambient/HeartbeatBackdrop';
import SparklesLayer from '../components/ambient/SparklesLayer';
import GlowBackdrop from '../components/ambient/GlowBackdrop';

export default function StorySections() {
  return (
    <>
      {/* Section 1: The Day I Saw You */}
      <Section className="relative">
        <SunsetBackdrop />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            ✨ The Day I Saw You
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            The first time I saw you, Venya, everything around me faded away. It felt like time slowed down just for us. Your smile, your eyes — something inside me instantly knew you were special. In that quiet moment, my heart chose you without hesitation.
          </p>
        </div>
      </Section>

      {/* Section 2: The Hug That Felt Like Home */}
      <Section className="relative bg-gradient-to-b from-transparent via-pink-50/50 to-transparent dark:via-pink-950/20">
        <HeartbeatBackdrop />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            🤗 The Hug That Felt Like Home
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            When I wrapped my arms around you for the first time, my heart was racing so fast, yet I felt the calmest I've ever felt. That hug wasn't just a moment — it felt like safety, comfort, and belonging. I never wanted to let go.
          </p>
        </div>
      </Section>

      {/* Section 3: When I Held Your Hand */}
      <Section className="relative">
        <SparklesLayer />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            💞 When I Held Your Hand
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            When I held your hand, my heartbeat was thundering in my chest. It felt like electricity and peace at the same time. In that simple touch, I felt connection, warmth, and something so real that words can't fully describe.
          </p>
        </div>
      </Section>

      {/* Section 4: The Kiss That Felt Like Heaven */}
      <Section className="relative bg-gradient-to-b from-transparent via-rose-50/50 to-transparent dark:via-rose-950/20">
        <GlowBackdrop />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            💋 The Kiss That Felt Like Heaven
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            And when you kissed me… everything paused. It was just you and me in that perfect second. I felt like I was in heaven. I never knew a single moment could feel so powerful, so beautiful, and so unforgettable.
          </p>
        </div>
      </Section>

      {/* Section 5: You Are Important To Me */}
      <Section className="relative">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">
            💖 You Are Important To Me
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-glow">
            The Most Important Person in My Life
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            Venya, you are not just someone I love — you are someone who means everything to me. You make my days brighter, my worries lighter, and my heart fuller. You are important to me in ways I cannot fully explain. Having you in my life is the most beautiful blessing.
          </p>
        </div>
      </Section>

      {/* Section 6: My Banana Kitten */}
      <Section className="relative bg-gradient-to-r from-yellow-50 via-pink-50 to-rose-50 dark:from-yellow-950/20 dark:via-pink-950/20 dark:to-rose-950/20">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            🍌🐱 My Banana Kitten
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-accent">
            My Sweet Banana Kitten 💛
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            My adorable Banana Kitten, your cute little smile, your laugh, your presence — everything about you melts my heart. You are my comfort, my happiness, and my favorite person in this world. No matter what, you will always be my Banana Kitten.
          </p>
        </div>
      </Section>
    </>
  );
}
