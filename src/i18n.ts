import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      br: {
        translation : {
            header: {
                OEvento: "O Evento",
                Belem: "Belém",
                ComprarIngresso : "Comprar Ingressos!",
                emBreve : "Ingressos em breve",
                menu : {
                    abrir : "MENU",
                    inicio : "INÍCIO",
                    oEvento : "O EVENTO",
                    programacao : "PROGRAMAÇÃO",
                    keynotes : "KEYNOTES",
                    guiaDaCidade: "GUIA DA CIDADE",
                    patrocinadores : "PATROCINADORES",
                    faq : "FAQ",
                    contato : "CONTATO",
                    ComprarIngresso : "Comprar Ingressos!",
                    planoDePatrocinio : "Plano de Patrocínio",
                    emBreve : "em breve",
                    fechar : "Fechar"
                }
            },
            contador : {
                faltam : "Faltam",
                dias : "dias",
                horas : "horas",
                mins : "mins",
                segs : "segs",
                dataProvisoria : "para Belém · data a confirmar"
            },
            carregamento : {
                carregando : "Carregando..."
            },
            carrossel : {
                pelaComunidade : "pela comunidade",
                paraComunidade : "para comunidade"
            },
            buttonPrincipal : {
                ingressos : "Ingressos",
                emBreve : "em breve",
                acionarCDC : "Acionar CDC"
            },
            home : {
                section1 : {
                    titulo : "O maior evento Python da América Latina",
                    slogan : "Pessoas > Tecnologia",
                    data : "Novembro de 2027",
                    local : "Belém, Pará",
                    conhecaOEvento : "Conheça o evento",
                    conhecaBelem : "Conheça Belém",
                    moduloComunidade : "Comunidade",
                    moduloBelem : "Belém",
                    moduloInfoTitulo : "Novembro de 2027",
                    moduloInfoTexto : "Python Brasil 2027"
                },
                section2 : {
                    titulo : "O evento",
                    paragrafo1 : "A <destaque>Python Brasil 2027</destaque> é a maior conferência sobre a linguagem de programação Python do Brasil e da América Latina.",
                    paragrafo2 : "Serão dias de imersão com tutoriais, palestras, sprints e muitos encontros: contribuir com projetos de software livre, aprender com a comunidade e fazer novas amizades.",
                    paragrafo3 : "Pela primeira vez, a edição acontece na Região Norte: em <destaque>Belém, no Pará</destaque>, organizada pela comunidade Python local com o apoio da APyB (Associação Python Brasil).",
                    conceitoTitulo : "Módulos em confluência",
                    conceitoTexto : "Pessoas chegam por caminhos diferentes e se encontram no evento, como os rios que se juntam em Belém."
                },
                section3 : {
                    subtitulo : "A cidade",
                    titulo : "Belém, o coração da Amazônia",
                    descricao : "Uma cidade onde cultura, conhecimento, tecnologia e comunidades se encontram.",
                    cards : [
                        {
                            titulo : "História e diversidade",
                            texto : "Fundada em 1616, Belém é uma das principais portas de entrada para a Amazônia brasileira. Sede da COP30 em 2025, reúne história, natureza e uma cultura que encanta."
                        },
                        {
                            titulo : "Conhecimento e tecnologia",
                            texto : "UFPA, UEPA, IFPA, UFRA, CESUPA, UNAMA, entre outras instituições de ensino que impulsionam a educação, a pesquisa e a inovação na região."
                        },
                        {
                            titulo : "Comunidades que conectam",
                            texto : "GruPy Pará, PyLadies Belém, Devs Norte, AWS User Group Belém, GDG Belém e diversas outras comunidades fortalecem o ecossistema tecnológico por meio da colaboração."
                        },
                        {
                            titulo : "Cultura, sabores e experiências",
                            texto : "Carimbó, Círio de Nazaré, açaí com peixe frito, tacacá, maniçoba, Ver-o-Peso, Estação das Docas, Mangal das Garças, Theatro da Paz e Ilha do Combu são alguns dos encantos da cidade."
                        }
                    ]
                },
                section4 : {
                    subtitulo : "Vem aí",
                    titulo : "O restante do site está em construção",
                    texto : "Estamos preparando tudo com muito carinho. Em breve você encontrará aqui a programação, as keynotes, o guia da cidade e as empresas patrocinadoras.",
                    emConstrucao : "Em construção"
                }
            },
            emConstrucao : {
                titulo : "Em construção",
                texto : "Esta página ainda está sendo preparada pela organização da Python Brasil 2027. Acompanhe as novidades nas nossas redes sociais!",
                voltar : "Voltar para o início",
                secoes : {
                    programacao : "Programação",
                    keynotes : "Keynotes",
                    guiaDaCidade : "Guia da cidade",
                    patrocinadores : "Patrocinadores",
                    faq : "Perguntas frequentes",
                    paginaNaoEncontrada : "Página não encontrada"
                }
            },
            footer : {
                site : "Site",
                inicio : "Início",
                oEvento : "O evento",
                belem : "Belém",
                programacao : "Programação",
                keynotes : "Keynotes",
                guiaDaCidade : "Guia da cidade",
                patrocinadores : "Patrocinadores",
                faq : "FAQ",
                nossasRedes : "Nossas redes",
                linksDaAPyB : "Links da APyB",
                codigoDeConduta : "Código de conduta",
                comprarIngressos : "Comprar Ingressos!",
                planoDePatrocinio : "Plano de Patrocínio",
                emBreve : "em breve",
                direitos : "Python Brasil 2027 · Belém, Pará · Organizado pela comunidade com o apoio da APyB"
            }
        }
      },
      en: {
        translation : {
            header: {
                OEvento: "The Event",
                Belem: "Belém",
                ComprarIngresso : "Buy Tickets!",
                emBreve : "Tickets coming soon",
                menu : {
                    abrir : "MENU",
                    inicio : "HOME",
                    oEvento : "THE EVENT",
                    programacao : "SCHEDULE",
                    keynotes : "KEYNOTES",
                    guiaDaCidade: "CITY GUIDE",
                    patrocinadores : "SPONSORS",
                    faq : "FAQ",
                    contato : "CONTACT",
                    ComprarIngresso : "Buy Tickets!",
                    planoDePatrocinio : "Sponsorship Plan",
                    emBreve : "coming soon",
                    fechar : "Close"
                }
            },
            contador : {
                faltam : "Countdown",
                dias : "days",
                horas : "hours",
                mins : "mins",
                segs : "secs",
                dataProvisoria : "to Belém · date to be confirmed"
            },
            carregamento : {
                carregando : "Loading..."
            },
            carrossel : {
                pelaComunidade : "by the community",
                paraComunidade : "for the community"
            },
            buttonPrincipal : {
                ingressos : "Tickets",
                emBreve : "coming soon",
                acionarCDC : "Report CoC"
            },
            home : {
                section1 : {
                    titulo : "The largest Python event in Latin America",
                    slogan : "People > Technology",
                    data : "November 2027",
                    local : "Belém, Pará",
                    conhecaOEvento : "About the event",
                    conhecaBelem : "Discover Belém",
                    moduloComunidade : "Community",
                    moduloBelem : "Belém",
                    moduloInfoTitulo : "November 2027",
                    moduloInfoTexto : "Python Brasil 2027"
                },
                section2 : {
                    titulo : "The event",
                    paragrafo1 : "<destaque>Python Brasil 2027</destaque> is the largest conference about the Python programming language in Brazil and Latin America.",
                    paragrafo2 : "Days of immersion with tutorials, talks, sprints and lots of gatherings: contributing to open source projects, learning from the community and making new friends.",
                    paragrafo3 : "For the first time, the conference takes place in the North of Brazil: in <destaque>Belém, Pará</destaque>, organized by the local Python community with the support of APyB (Python Brazil Association).",
                    conceitoTitulo : "Modules in confluence",
                    conceitoTexto : "People arrive through different paths and meet at the event, like the rivers that join in Belém."
                },
                section3 : {
                    subtitulo : "The city",
                    titulo : "Belém, the heart of the Amazon",
                    descricao : "A city where culture, knowledge, technology and communities meet.",
                    cards : [
                        {
                            titulo : "History and diversity",
                            texto : "Founded in 1616, Belém is one of the main gateways to the Brazilian Amazon. Host of COP30 in 2025, it brings together history, nature and a charming culture."
                        },
                        {
                            titulo : "Knowledge and technology",
                            texto : "UFPA, UEPA, IFPA, UFRA, CESUPA, UNAMA and other institutions drive education, research and innovation in the region."
                        },
                        {
                            titulo : "Communities that connect",
                            texto : "GruPy Pará, PyLadies Belém, Devs Norte, AWS User Group Belém, GDG Belém and many other communities strengthen the tech ecosystem through collaboration."
                        },
                        {
                            titulo : "Culture, flavors and experiences",
                            texto : "Carimbó, Círio de Nazaré, açaí with fried fish, tacacá, maniçoba, Ver-o-Peso, Estação das Docas, Mangal das Garças, Theatro da Paz and Combu Island are some of the city's charms."
                        }
                    ]
                },
                section4 : {
                    subtitulo : "Coming soon",
                    titulo : "The rest of the website is under construction",
                    texto : "We are preparing everything with care. Soon you will find the schedule, keynotes, city guide and sponsors here.",
                    emConstrucao : "Under construction"
                }
            },
            emConstrucao : {
                titulo : "Under construction",
                texto : "This page is still being prepared by the Python Brasil 2027 organization. Follow the news on our social media!",
                voltar : "Back to home",
                secoes : {
                    programacao : "Schedule",
                    keynotes : "Keynotes",
                    guiaDaCidade : "City guide",
                    patrocinadores : "Sponsors",
                    faq : "Frequently asked questions",
                    paginaNaoEncontrada : "Page not found"
                }
            },
            footer : {
                site : "Website",
                inicio : "Home",
                oEvento : "The event",
                belem : "Belém",
                programacao : "Schedule",
                keynotes : "Keynotes",
                guiaDaCidade : "City guide",
                patrocinadores : "Sponsors",
                faq : "FAQ",
                nossasRedes : "Our social media",
                linksDaAPyB : "APyB links",
                codigoDeConduta : "Code of conduct",
                comprarIngressos : "Buy Tickets!",
                planoDePatrocinio : "Sponsorship Plan",
                emBreve : "coming soon",
                direitos : "Python Brasil 2027 · Belém, Pará · Organized by the community with the support of APyB"
            }
        }
      },
      es: {
        translation : {
            header: {
                OEvento: "El Evento",
                Belem: "Belém",
                ComprarIngresso : "¡Comprar Entradas!",
                emBreve : "Entradas pronto",
                menu : {
                    abrir : "MENÚ",
                    inicio : "INICIO",
                    oEvento : "EL EVENTO",
                    programacao : "PROGRAMACIÓN",
                    keynotes : "KEYNOTES",
                    guiaDaCidade: "GUÍA DE LA CIUDAD",
                    patrocinadores : "PATROCINADORES",
                    faq : "FAQ",
                    contato : "CONTACTO",
                    ComprarIngresso : "¡Comprar Entradas!",
                    planoDePatrocinio : "Plan de Patrocinio",
                    emBreve : "pronto",
                    fechar : "Cerrar"
                }
            },
            contador : {
                faltam : "Faltan",
                dias : "días",
                horas : "horas",
                mins : "mins",
                segs : "segs",
                dataProvisoria : "para Belém · fecha por confirmar"
            },
            carregamento : {
                carregando : "Cargando..."
            },
            carrossel : {
                pelaComunidade : "por la comunidad",
                paraComunidade : "para la comunidad"
            },
            buttonPrincipal : {
                ingressos : "Entradas",
                emBreve : "pronto",
                acionarCDC : "Reportar CdC"
            },
            home : {
                section1 : {
                    titulo : "El mayor evento Python de América Latina",
                    slogan : "Personas > Tecnología",
                    data : "Noviembre de 2027",
                    local : "Belém, Pará",
                    conhecaOEvento : "Conoce el evento",
                    conhecaBelem : "Conoce Belém",
                    moduloComunidade : "Comunidad",
                    moduloBelem : "Belém",
                    moduloInfoTitulo : "Noviembre de 2027",
                    moduloInfoTexto : "Python Brasil 2027"
                },
                section2 : {
                    titulo : "El evento",
                    paragrafo1 : "La <destaque>Python Brasil 2027</destaque> es la mayor conferencia sobre el lenguaje de programación Python en Brasil y América Latina.",
                    paragrafo2 : "Serán días de inmersión con tutoriales, charlas, sprints y muchos encuentros: contribuir a proyectos de software libre, aprender con la comunidad y hacer nuevas amistades.",
                    paragrafo3 : "Por primera vez, la edición se realiza en la Región Norte de Brasil: en <destaque>Belém, Pará</destaque>, organizada por la comunidad Python local con el apoyo de la APyB (Asociación Python Brasil).",
                    conceitoTitulo : "Módulos en confluencia",
                    conceitoTexto : "Las personas llegan por caminos diferentes y se encuentran en el evento, como los ríos que se unen en Belém."
                },
                section3 : {
                    subtitulo : "La ciudad",
                    titulo : "Belém, el corazón de la Amazonía",
                    descricao : "Una ciudad donde cultura, conocimiento, tecnología y comunidades se encuentran.",
                    cards : [
                        {
                            titulo : "Historia y diversidad",
                            texto : "Fundada en 1616, Belém es una de las principales puertas de entrada a la Amazonía brasileña. Sede de la COP30 en 2025, reúne historia, naturaleza y una cultura encantadora."
                        },
                        {
                            titulo : "Conocimiento y tecnología",
                            texto : "UFPA, UEPA, IFPA, UFRA, CESUPA, UNAMA, entre otras instituciones que impulsan la educación, la investigación y la innovación en la región."
                        },
                        {
                            titulo : "Comunidades que conectan",
                            texto : "GruPy Pará, PyLadies Belém, Devs Norte, AWS User Group Belém, GDG Belém y muchas otras comunidades fortalecen el ecosistema tecnológico a través de la colaboración."
                        },
                        {
                            titulo : "Cultura, sabores y experiencias",
                            texto : "Carimbó, Círio de Nazaré, açaí con pescado frito, tacacá, maniçoba, Ver-o-Peso, Estação das Docas, Mangal das Garças, Theatro da Paz e Isla del Combu son algunos de los encantos de la ciudad."
                        }
                    ]
                },
                section4 : {
                    subtitulo : "Muy pronto",
                    titulo : "El resto del sitio está en construcción",
                    texto : "Estamos preparando todo con mucho cariño. Pronto encontrarás aquí la programación, las keynotes, la guía de la ciudad y los patrocinadores.",
                    emConstrucao : "En construcción"
                }
            },
            emConstrucao : {
                titulo : "En construcción",
                texto : "Esta página todavía está siendo preparada por la organización de Python Brasil 2027. ¡Sigue las novedades en nuestras redes sociales!",
                voltar : "Volver al inicio",
                secoes : {
                    programacao : "Programación",
                    keynotes : "Keynotes",
                    guiaDaCidade : "Guía de la ciudad",
                    patrocinadores : "Patrocinadores",
                    faq : "Preguntas frecuentes",
                    paginaNaoEncontrada : "Página no encontrada"
                }
            },
            footer : {
                site : "Sitio",
                inicio : "Inicio",
                oEvento : "El evento",
                belem : "Belém",
                programacao : "Programación",
                keynotes : "Keynotes",
                guiaDaCidade : "Guía de la ciudad",
                patrocinadores : "Patrocinadores",
                faq : "FAQ",
                nossasRedes : "Nuestras redes",
                linksDaAPyB : "Enlaces de APyB",
                codigoDeConduta : "Código de conducta",
                comprarIngressos : "¡Comprar Entradas!",
                planoDePatrocinio : "Plan de Patrocinio",
                emBreve : "pronto",
                direitos : "Python Brasil 2027 · Belém, Pará · Organizado por la comunidad con el apoyo de la APyB"
            }
        }
      }
    },
    lng: "br",
    fallbackLng: "br",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
