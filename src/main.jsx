import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Apple,
  ArrowRight,
  BadgeCheck,
  Bike,
  Box,
  Check,
  ChevronDown,
  Fish,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Utensils,
  Waves,
  X,
} from "lucide-react";
import "./styles.css";

const photos = {
  hero:
    "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1300&q=85",
  fish:
    "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=85",
  prawns:
    "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85",
  crab:
    "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=85",
  squid:
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
};

const categories = [
  ["Fresh Fish", photos.fish],
  ["Premium Fish", photos.crab],
  ["Prawns", photos.prawns],
  ["Crabs", photos.crab],
  ["Squid", photos.squid],
  ["Shellfish", photos.prawns],
  ["Chicken", photos.fish],
  ["Mutton", photos.crab],
  ["Ready To Cook", photos.squid],
];

const offers = [
  {
    title: "Weekend Specials",
    copy: "Premium seer fish and prawns packed for family feasts.",
    action: "Shop Weekend Box",
    image: photos.fish,
  },
  {
    title: "Combo Packs",
    copy: "Curated seafood bundles cleaned, cut, and ready for cooking.",
    action: "Explore Combos",
    image: photos.squid,
  },
  {
    title: "Free Delivery",
    copy: "Same-day doorstep delivery on selected morning arrivals.",
    action: "Order Fresh",
    image: photos.hero,
  },
];

const reasons = [
  [Waves, "Freshly Sourced", "Directly from trusted coastal suppliers every day."],
  [Fish, "Expert Cut & Clean", "Customized exactly as you prefer."],
  [Truck, "Fast Delivery", "Quick delivery in temperature-controlled packaging."],
  [PackageCheck, "Hygienically Packed", "Food-safe packaging to preserve freshness."],
];

const journey = [
  ["Fresh Catch", "Selected at trusted coastal sources before sunrise.", "Morning sourcing preserves firmness and natural sweetness.", Waves, photos.fish],
  ["Quality Inspection", "Every lot is checked for texture, eyes, gills, and aroma.", "Only inspection-passed seafood moves into Bestiet packing.", ShieldCheck, photos.fish],
  ["Cold Chain Transport", "Temperature-controlled movement protects freshness.", "Cold chain discipline slows spoilage without masking quality.", Truck, photos.hero],
  ["Processing Centre", "Orders reach a clean preparation facility.", "Separate handling areas keep raw product organized and traceable.", Box, photos.squid],
  ["Cut & Clean", "Cuts are prepared to your cooking preference.", "Custom cleaning reduces prep time at home.", Fish, photos.squid],
  ["Hygienically Packed", "Food-safe packs are sealed with care.", "Sealed packs help preserve freshness during the final trip.", PackageCheck, photos.fish],
  ["Delivered Fresh", "Your order arrives quickly at the door.", "Same-day delivery keeps the product close to its morning catch.", Bike, photos.hero],
];

const reviews = [
  ["Anjali Menon", "The freshest seafood we've ever ordered online. Clean cuts, no smell, and beautifully packed.", photos.fish],
  ["Rashid K.", "The prawns arrived chilled and ready for curry. It felt more premium than visiting a market.", photos.prawns],
  ["Meera Joseph", "Reliable morning delivery and the cut preference was exactly right. Bestiet feels trustworthy.", photos.squid],
];

const recipes = [
  ["Kerala Fish Curry", "King fish, kudampuli, shallots, curry leaves", photos.fish],
  ["Charcoal Grilled Fish", "Seer fish steaks, lemon, pepper, herbs", photos.fish],
  ["Prawns Fry", "Tiger prawns, chilli, coconut oil, garlic", photos.prawns],
  ["Crab Roast", "Fresh crab, masala, shallots, black pepper", photos.crab],
];

const faqs = [
  ["How fresh is the fish?", "Bestiet Fresh prioritizes same-day arrivals from trusted coastal suppliers and clearly highlights arrival times on product cards."],
  ["How is it packed?", "Orders are cleaned, portioned, sealed in food-safe packs, and sent in temperature-conscious delivery packaging."],
  ["Can I select cut type?", "Yes. Product pages in the next phase will include cut, clean, and weight preferences for each item."],
  ["What are the delivery timings?", "The homepage highlights morning arrivals and same-day delivery. Timings can be configured by service area."],
  ["What is the cancellation policy?", "Orders can be cancelled before processing begins. Fresh-item refund rules are shown before checkout."],
];

function Header() {
  const [open, setOpen] = useState(false);
  const nav = ["Categories", "Track Order", "Offers"];
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Bestiet Fresh home">
        <span className="brand-mark">
          <img src="/bestiet-logo.png" alt="" />
        </span>
        <span className="brand-text">
          <strong>Bestiet</strong>
          <em>Fresh</em>
        </span>
      </a>
      <div className="search" role="search">
        <Search size={18} aria-hidden="true" />
        <label className="sr-only" htmlFor="site-search">Search seafood and meat</label>
        <input id="site-search" placeholder="Search fresh fish, prawns, chicken..." />
      </div>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="icon-button" aria-label="Open cart">
          <ShoppingBag size={20} />
        </button>
        <button className="login-button">Login</button>
        <a className="primary-button small" href="#categories">Order Now</a>
        <button className="icon-button menu-button" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button className="icon-button close-button" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
          {nav.map((item) => (
            <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
          ))}
          <a className="primary-button" href="#categories" onClick={() => setOpen(false)}>Order Now</a>
        </div>
      )}
    </header>
  );
}

function SectionIntro({ title, copy }) {
  return (
    <div className="section-intro">
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function App() {
  const [offerIndex, setOfferIndex] = useState(0);
  const [activeJourney, setActiveJourney] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const offer = offers[offerIndex];

  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero section-shell">
          <div className="hero-copy">
            <h1>Fresh Fish.<br />Expertly Cut.<br />Delivered To Your Door.</h1>
            <p>
              Experience premium seafood delivered fresh from trusted sources to your doorstep.
              Hygienically processed, expertly cleaned, and packed with care for your family.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#categories">Order Now</a>
              <a className="secondary-button" href="#offers">Special Offers</a>
            </div>
            <div className="trust-row" aria-label="Trust guarantees">
              {["Freshly Sourced", "Cut & Clean", "Same-Day Delivery", "Hygienically Packed"].map((item) => (
                <span key={item}><Check size={16} /> {item}</span>
              ))}
            </div>
          </div>
          <div className="hero-media">
            <img src={photos.hero} alt="Premium fresh seafood prepared for delivery" />
            <div className="hero-note">
              <BadgeCheck size={22} />
              <div>
                <strong>Morning inspected</strong>
                <span>Packed fresh for today</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell" id="categories">
          <SectionIntro title="Categories" copy="Premium selections for everyday cooking and special family meals." />
          <div className="category-grid">
            {categories.map(([name, image]) => (
              <a className="category-card" href="#offers" key={name}>
                <img src={image} alt={`${name} category`} loading="lazy" />
                <span>{name}</span>
                <ArrowRight size={18} />
              </a>
            ))}
          </div>
        </section>

        <section className="section-shell" id="offers">
          <div className="offer-panel">
            <img src={offer.image} alt={`${offer.title} offer`} loading="lazy" />
            <div className="offer-copy">
              <p>Special Offers</p>
              <h2>{offer.title}</h2>
              <span>{offer.copy}</span>
              <button className="primary-button">{offer.action}</button>
            </div>
            <div className="offer-controls" aria-label="Offer carousel controls">
              {offers.map((item, index) => (
                <button
                  key={item.title}
                  className={index === offerIndex ? "active" : ""}
                  aria-label={`Show ${item.title}`}
                  onClick={() => setOfferIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <SectionIntro title="Why Bestiet Fresh" />
          <div className="reason-grid">
            {reasons.map(([Icon, title, copy]) => (
              <article className="reason-card" key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="journey section-shell">
          <div className="journey-wrapper">
            <SectionIntro title="Your Fish's Journey" copy="See how every order travels from the sea to your doorstep." />
            <div className="timeline">
              <div className="timeline-steps" role="tablist" aria-label="Fish journey stages">
                {journey.map(([title, , , Icon], index) => (
                  <button
                    key={title}
                    role="tab"
                    aria-selected={activeJourney === index}
                    className={activeJourney === index ? "active" : ""}
                    onFocus={() => setActiveJourney(index)}
                    onClick={() => setActiveJourney(index)}
                  >
                    <Icon size={20} />
                    <span>{title}</span>
                  </button>
                ))}
              </div>
              <article className="journey-card">
                <img src={journey[activeJourney][4]} alt={`${journey[activeJourney][0]} stage`} loading="lazy" />
                <div>
                  <p>Step {activeJourney + 1} of {journey.length}</p>
                  <h3>{journey[activeJourney][0]}</h3>
                  <span>{journey[activeJourney][1]}</span>
                  <strong>{journey[activeJourney][2]}</strong>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <SectionIntro title="Customer Reviews" copy="Verified customers who trust Bestiet for fresh family meals." />
          <div className="review-grid">
            {reviews.map(([name, copy, image]) => (
              <article className="review-card" key={name}>
                <img src={image} alt={name} loading="lazy" />
                <div className="rating">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}</div>
                <p>"{copy}"</p>
                <footer>
                  <strong>{name}</strong>
                  <span><BadgeCheck size={15} /> Verified Purchase</span>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionIntro title="Recipes" copy="Cook confidently with recipes that link straight to the seafood you need." />
          <div className="recipe-grid">
            {recipes.map(([title, ingredients, image]) => (
              <article className="recipe-card" key={title}>
                <img src={image} alt={title} loading="lazy" />
                <div>
                  <h3>{title}</h3>
                  <p>{ingredients}</p>
                  <a href="#categories">Shop ingredients <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="faq section-shell">
          <SectionIntro title="FAQ" />
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className="faq-item" key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  {question}
                  <ChevronDown size={20} />
                </button>
                {openFaq === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="app-download section-shell">
          <div>
            <h2>Bestiet Fresh in your pocket.</h2>
            <p>Track fresh arrivals, save cut preferences, reorder family favourites, and get doorstep updates.</p>
          </div>
          <div className="store-buttons">
            <button><Apple size={22} /> App Store</button>
            <button><Sparkles size={22} /> Google Play</button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <img src="/bestiet-logo.png" alt="Bestiet Fresh" />
          <p>Your Fresh Friend At The Door</p>
          <form>
            <label htmlFor="newsletter">Newsletter</label>
            <div>
              <input id="newsletter" type="email" placeholder="Email address" />
              <button aria-label="Subscribe"><Mail size={18} /></button>
            </div>
          </form>
        </div>
        <nav aria-label="Footer company links">
          <h3>Company</h3>
          {["About", "Careers", "Privacy", "Terms", "Refund", "Contact"].map((item) => <a href="#top" key={item}>{item}</a>)}
        </nav>
        <nav aria-label="Footer service links">
          <h3>Service</h3>
          {["Fresh Fish", "Premium Fish", "Chicken", "Mutton", "Ready To Cook", "Track Order"].map((item) => <a href="#top" key={item}>{item}</a>)}
        </nav>
        <div>
          <h3>Contact</h3>
          <p><MapPin size={17} /> Kerala, India</p>
          <p><Utensils size={17} /> Hygienic seafood delivery</p>
          <div className="socials">
            <a href="#top" aria-label="Bestiet Fresh social updates"><Sparkles size={19} /></a>
            <a href="#top" aria-label="Bestiet Fresh messages"><MessageCircle size={19} /></a>
            <a href="#top" aria-label="Bestiet Fresh delivery updates"><Send size={19} /></a>
          </div>
        </div>
        <div className="copyright">
          <span>Payment Methods: UPI, Cards, Net Banking, Cash on Delivery</span>
          <span>Developed by Crop Tech</span>
          <span>Copyright © 2026 Bestiet Fresh. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
