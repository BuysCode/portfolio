export default function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Sobre Mim</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Minha jornada como desenvolvedor autodidata
          </p>
        </div>

        <div className="bg-bg-card rounded-card p-8 sm:p-12 shadow-lg border border-border/50">
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p className="text-lg">
              Comecei no mundo da programacao em 2021, criando bots para Discord.
              Dois anos depois, descobri o desenvolvimento web e me apaixonei.
            </p>
            <p>
              No Ensino Medio, entrei para uma escola tecnica em desenvolvimento
              web fullstack e mobile. Logo me destaquei pela experiencia previa.
              Quando percebi que estava mais avancado que o conteudo ensinado,
              optei por sair e seguir meu proprio caminho.
            </p>
            <p>
              Hoje, curso Ciencia da Computacao na UniRitter e continuo
              aprimorando minhas habilidades em projetos reais. Acredito que a
              melhor forma de aprender e construindo — e exatamente isso que
              faco.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-accent">4+</div>
              <div className="text-sm text-text-muted mt-1">
                Anos de estudo
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-accent">10+</div>
              <div className="text-sm text-text-muted mt-1">
                Tecnologias
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-accent">3+</div>
              <div className="text-sm text-text-muted mt-1">
                Projetos publicados
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-text-muted mt-1">Autodidata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
