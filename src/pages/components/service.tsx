import Image from "next/image";
import useScroll from "next/router";

export default function Service() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center">
          <div className="h-40 flex justify-center">
            <h1 className="text-5xl">mes services</h1>
          </div>
          <div className="h-40 flex justify-center">
            <h2 className="text-5xl text-center">Site web React</h2>
          </div>
          <div className="flex flex-wrap bg-gradient-to-b from-stone-900">
            <div className="w-full md:w-1/3 p-3">
              <div className="divider divider-info"></div>
              <h3 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Site vitrine sur mesure
              </h3>
              <ul>
                <li>1 page d accueil</li>
                <li>1 page produit ou service</li>
                <li>1 page de contact</li>
                <li>1 page entreprise et histoire</li>
                <li>1 page mention légales</li>
                <li>1 Banière gestion cookies RGPD</li>
                <li>hébergements offert la première année</li>
                <br />
                <br />
                <br />
                <br />
                <br />
              </ul>
              <br />
              <h4 className="text-2xl">La rédaction des pages</h4>
              <br />
              <p>
                Je rédige l’intégralité de votre contenu pour le rendre
                attractif et optimisé pour le référencement naturel. La formule
                idéale pour attirer, qualifier et convertir vos prospects en
                clients.
              </p>
              <br />
              <h4 className="text-2xl">Pack référencement complet</h4>
              <br />
              <p>
                Je crée un site web responsif tout écran et optimisé pour les
                moteurs de recherche et je crée une stratégie de mots-clés sur
                mesure pour attirer du trafic gratuit et qualifié sur le long
                terme.
              </p>
              <br />
              <div className="bordure text-2xl font-bold">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h5>A partir de 1200€</h5>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-3">
              <div className="divider divider-info"></div>
              <h3 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Site de blog sur mesure
              </h3>
              <ul>
                <li>1 page d accueil</li>
                <li>1 page de blog</li>
                <li>1 page de contact</li>
                <li>1 news letters</li>
                <li>1 base de données</li>
                <li>1 page login pour vos membres</li>
                <li>1 page mention légal</li>
                <li>1 Banière gestion cookies RGPD</li>
                <li>hébergements offert la première année</li>
                <br />
                <br />
              </ul>
              <br />
              <h4 className="text-2xl">La rédaction des pages</h4>
              <br />
              <p>
                Je rédige l’intégralité de votre contenu pour le rendre
                attractif et optimisé pour le référencement naturel. La formule
                idéale pour attirer, qualifier et convertir vos prospects en
                clients.
              </p>
              <br />
              <h4 className="text-2xl">Pack référencement complet</h4>
              <br />
              <p>
                Je crée un site web responsif tout écran et optimisé pour les
                moteurs de recherche et je crée une stratégie de mots-clés sur
                mesure pour attirer du trafic gratuit et qualifié sur le long
                terme.
              </p>
              <br />
              <div className="bordure text-2xl font-bold">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h5>A partir de 2000€</h5>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-3">
              <div className="divider divider-info"></div>
              <h3 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Site de e-commerce sur mesure
              </h3>
              <ul>
                <li>1 page d accueil</li>
                <li>1 page de vos produits</li>
                <li>1 page de contact</li>
                <li>1 news letters</li>
                <li>1 base de données</li>
                <li>1 page de connexion</li>
                <li>1 système de paiement</li>
                <li>1 page politique de confidentialité</li>
                <li>1 Banière gestion cookies RGPD</li>
              </ul>
              <br />
              <h4 className="text-2xl">La rédaction des pages</h4>
              <br />
              <p>
                Je rédige l’intégralité de votre contenu pour le rendre
                attractif et optimisé pour le référencement naturel. La formule
                idéale pour attirer, qualifier et convertir vos prospects en
                clients.
              </p>
              <br />
              <h4 className="text-2xl">Pack référencement complet</h4>
              <br />
              <p>
                Je crée un site web responsif tout écran et optimisé pour les
                moteurs de recherche et je crée une stratégie de mots-clés sur
                mesure pour attirer du trafic gratuit et qualifié sur le long
                terme.
              </p>
              <br />
              <div className="bordure text-2xl font-bold">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h5>A partir de 3500€</h5>
              </div>
            </div>
          </div>
          <div className="divider divider-info"></div>
          <div className="h-40 flex items-center justify-center">
            <h2 className="text-5xl text-center">Site web WordPress</h2>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="w-full md:w-1/3 p-3">
              <div className="divider divider-info"></div>
              <h3 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Site vitrine
              </h3>
              <ul>
                <li>1 page d accueil</li>
                <li>1 page produit ou service</li>
                <li>1 page de contact</li>
                <li>1 page entreprise et histoire</li>
                <li>1 Banière gestion cookies RGPD</li>
                <li>hébergements offert la première année</li>
              </ul>
              <br />
              <div className="bordure text-2xl font-bold">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h5>A partir de 500€</h5>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-3">
              <div className="divider divider-info"></div>
              <h3 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Site de blog
              </h3>
              <ul>
                <li>1 page d accueil</li>
                <li>1 page de blog</li>
                <li>1 page de contact</li>
                <li>1 page de connexion</li>
                <li>1 base de données</li>
                <li>1 Banière gestion cookies RGPD</li>
                <li>hébergements offert la première année</li>
              </ul>
              <br />
              <div className="bordure text-2xl font-bold">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h5>A partir de 900€</h5>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-3">
              <div className="divider divider-info"></div>
              <h3 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Site e-commerce
              </h3>
              <ul>
                <li>1 page d accueil</li>
                <li>1 page de vos produits</li>
                <li>1 page de contact</li>
                <li>1 news letters</li>
                <li>1 base de données</li>
                <li>1 page de connexion</li>
                <li>1 système de paiement</li>
                <li>1 page politique de confidentialité</li>
                <li>1 Banière gestion cookies RGPD</li>
              </ul>
              <br />
              <div className="bordure text-2xl font-bold">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h5>A partir de 1800€</h5>
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => scrollTo("my-element", 100)}>
              <Image
                src="/logos/up-arrow.png"
                width="64"
                height="64"
                alt="scroll up"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
