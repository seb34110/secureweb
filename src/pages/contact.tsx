import Header from "./components/header";
import Footer from "./components/footer";

import { useForm } from "react-hook-form";
import { useState } from "react";

function Contact() {
  const [buttonClicked, setButtonClicked] = useState(false);

  // Variables
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // States
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  // Méthode
  const onSubmitHandler = async (data) => {
    if (!isLoading) {
      setIsLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      setIsLoading(false);

      if (!response.ok) {
        console.log("error");
      } else {
        console.log("ok");
        reset();
        setIsSended(true);
      }
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="p-10">
          <div className="contact h-2xl min-h-screen w-full text-xl">
            <h1 className="flex justify-center text-4xl mb-10">Contact</h1>

            {/* Formulaire */}
            <form
              className="max-w-8xl mx-auto text-2xl ml-4 sm:flex justify-center"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              {isSended && (
                <p className="text-white mb-10 text-center">
                  Votre message a bien été envoyé avec succès je vous répondrez
                  rapidement.
                </p>
              )}
              <div className="space-y-4 text-lg">
                <div className="sm:grid-cols-2">
                  <div>
                    <label htmlFor="prenom" className="label">
                      Prénom
                    </label>
                    <input
                      className="input shadow-sm shadow-white"
                      placeholder="Prénom"
                      id="prenom"
                      {...register("prenom", {
                        required: true,
                      })}
                    />
                    {errors.prenom && (
                      <small className="text-red-500">Prénom requis.</small>
                    )}
                  </div>
                  <div>
                    <label htmlFor="nom" className="label">
                      Nom
                    </label>
                    <input
                      className="input shadow-sm shadow-white"
                      placeholder="Nom"
                      id="nom"
                      {...register("nom", {
                        required: true,
                      })}
                    />
                    {errors.nom && (
                      <small className="text-red-500">Nom requis.</small>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    Adresse mail
                  </label>
                  <input
                    className="input shadow-sm shadow-white"
                    placeholder="Adresse mail"
                    id="email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && (
                    <small className="text-red-500">email requis.</small>
                  )}
                </div>
                <div>
                  <label htmlFor="contenu" className="label">
                    Message
                  </label>
                  <textarea
                    className="input h-56 shadow-sm shadow-white"
                    placeholder="Bonjour..."
                    {...register("contenu", {
                      required: true,
                    })}
                  ></textarea>
                  {errors.contenu && (
                    <small className="text-red-500">Message requis.</small>
                  )}
                </div>
                <div>
                  {!isLoading && (
                    <button className="neonButton btn btn-ghost mt-10 mb-5">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      envoyez
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
