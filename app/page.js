import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-8 pt-8 border-t">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <h1 className="font-semibold text-lg mt-4">
          {" "}
          Welcome to Feastify – Crafting Culinary Delights, One Pizza at a Time{" "}
        </h1>
        <p className="my-2 text-gray-500 text-sm font-semibold">
          At Feastify, we believe that every meal is an opportunity for a
          delightful experience, and what better way to celebrate flavors than
          through the timeless joy of pizza? Our journey began with a passion
          for bringing people together over a slice of perfection. We envisioned
          a platform that not only satisfies your pizza cravings but also
          elevates the entire culinary experience.
        </p>
      </section>
      <section className="text-center pt-8 border-t">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="py-8">
          <div class="container mx-auto text-center">
            <p class="text-lg mb-8">
              Have a question or feedback? Reach out to us! We're here to help.
            </p>
            <div className="flex gap-4 items-center justify-center">
              <a
                href="mailto:info@feastify.com"
                class="inline-block bg-primary text-white font-semibold py-2 px-4 rounded-full"
              >
                info@feastify.com
              </a>
              <a
                href="tel:+44884488"
                class="inline-block bg-primary text-white font-semibold py-2 px-4 rounded-full"
              >
                +44884488
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer class="py-8 border-t">
        <div class="container mx-auto flex justify-between items-center">
          <p class="text-sm">&copy; 2023 Feastify. All rights reserved.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-500">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-500">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
