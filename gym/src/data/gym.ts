import type { StaticImageData } from "next/image";
import heroGym from "../../assets/hero-gym.jpg";
import coachSessionImage from "../../assets/images.jpeg";
import coachLungeImage from "../../assets/images1.jpeg";
import conditioningImage from "../../assets/images2.jpeg";
import kettlebellCoachingImage from "../../assets/istockphoto-1956798859-612x612.jpg";
import boxingImage from "../../assets/program-boxing.jpg";
import hiitImage from "../../assets/program-hiit.jpg";
import strengthImage from "../../assets/program-strength.jpg";

export const brand = {
  name: "GRINDHAUS",
  suffix: "GYM",
  tagline: "Karachi's home for serious training",
  heroLine: "Earn",
  heroLineAccent: "Every Rep.",
  heroText:
    "Expert coaching, honest work, and a crew that keeps showing up. Find your training floor in Karachi.",
  ctaPrimary: "Claim Your Free Week",
  ctaSecondary: "Explore Training",
};

export const stats = [
  { value: "8+", label: "Years on the floor" },
  { value: "12", label: "Expert coaches" },
  { value: "3", label: "Training tracks" },
  { value: "1", label: "Strong community" },
];

export const navLinks = [
  { href: "#training", label: "Training" },
  { href: "#coaches", label: "Coaches" },
  { href: "#membership", label: "Membership" },
  { href: "#timetable", label: "Timetable" },
  { href: "#story", label: "Our Story" },
];

export const programs: { title: string; image: StaticImageData; tags: string[]; description: string }[] = [
  {
    title: "Strength",
    image: strengthImage,
    tags: ["Barbell", "Progressive"],
    description: "Build real-world strength with coached lifts, smart progressions, and room to move.",
  },
  {
    title: "Boxing",
    image: boxingImage,
    tags: ["Technique", "Conditioning"],
    description: "Learn footwork, defense, and combinations in focused classes for every level.",
  },
  {
    title: "HIIT",
    image: hiitImage,
    tags: ["Intervals", "All levels"],
    description: "Short, coach-led intervals that build work capacity without wasting your time.",
  },
];

export const coaches = [
  {
    name: "Hamza Khan",
    initials: "HK",
    role: "Strength Coach",
    bio: "Powerlifting coach focused on strong foundations and steady progress.",
    image: coachLungeImage,
    imageAlt: "Coach helping an athlete perform a lunge beside a barbell",
  },
  {
    name: "Ayesha Malik",
    initials: "AM",
    role: "Boxing Coach",
    bio: "Technical boxing coach who makes sharp fundamentals accessible to all.",
    image: coachSessionImage,
    imageAlt: "Trainer checking in with an athlete after a workout",
  },
  {
    name: "Bilal Ahmed",
    initials: "BA",
    role: "Conditioning Coach",
    bio: "Builds hard-working, sustainable conditioning for everyday athletes.",
    image: conditioningImage,
    imageAlt: "Athletes doing floor-based conditioning at the gym",
  },
  {
    name: "Sara Javed",
    initials: "SJ",
    role: "Performance Coach",
    bio: "Helps members train with purpose, recover well, and stay consistent.",
    image: kettlebellCoachingImage,
    imageAlt: "Coach guiding an athlete through a kettlebell exercise",
  },
];

export const plans = [
  { name: "Open Floor", price: "8,500", period: "/ month", highlight: false, features: ["Unlimited gym access", "Free movement assessment", "Locker access"] },
  { name: "All Access", price: "13,500", period: "/ month", highlight: true, features: ["Everything in Open Floor", "Unlimited group classes", "Monthly coach check-in", "Guest pass each month"] },
  { name: "Coached", price: "22,000", period: "/ month", highlight: false, features: ["Everything in All Access", "Four personal sessions", "Individual training plan"] },
];

export const schedule = [
  { time: "06:00", mon: "Strength", tue: "Boxing", wed: "Strength", thu: "HIIT", fri: "Strength", sat: "Open Floor" },
  { time: "08:00", mon: "Open Floor", tue: "HIIT", wed: "Open Floor", thu: "Boxing", fri: "Open Floor", sat: "Boxing" },
  { time: "17:00", mon: "Boxing", tue: "Strength", wed: "HIIT", thu: "Strength", fri: "Boxing", sat: "HIIT" },
  { time: "19:00", mon: "HIIT", tue: "Open Floor", wed: "Boxing", thu: "Open Floor", fri: "HIIT", sat: "Open Floor" },
];

export const contactInfo = {
  address: "DHA Phase 5, Karachi, Pakistan",
  hours: "Monday–Saturday, 6:00 AM–10:00 PM",
  phone: "+92 300 000 0000",
  email: "train@grindhaus.pk",
};

export const storyPoints = [
  { title: "Coaching on the floor", description: "Our coaches train beside you, keep your form sharp, and help you build a plan that lasts." },
  { title: "A place for every level", description: "First session or fifth year, every workout scales to where you are and where you want to go." },
  { title: "Progress over noise", description: "No gimmicks or quick fixes. Just good programming, useful equipment, and people in your corner." },
];

export { heroGym };