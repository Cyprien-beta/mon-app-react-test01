import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const BOOKS = [
  {a:"Roald Dahl",t:"Charlie et la chocolaterie",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"Royaume-Uni",m:"Charlie Bucket, enfant pauvre, gagne un ticket d'or lui permettant de visiter la chocolaterie magique de Willy Wonka. Un monde fantastique et foisonnant."},
  {a:"Bernard Werber",t:"Le miroir de Cassandre",n:7.5,t1:"Roman de sciences fiction",t2:"Roman fantastique",p:"France",m:"Deux jumeaux, l'un optimiste, l'autre pessimiste, perçoivent le monde de manière radicalement opposée. Werber explore les mécanismes de la perception humaine."},
  {a:"Primo Levy",t:"Si c'est un homme",n:7,t1:"Roman biographique",t2:"Essai narratif",p:"Italie",m:"Primo Levi témoigne de sa déportation à Auschwitz. Avec une précision clinique et sans haine, il décrit la déshumanisation systématique opérée par le régime nazi."},
  {a:"J.K.Rowling",t:"Harry Potter, tome 2",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"Royaume-Uni",m:"Harry Potter retourne à Poudlard pour sa deuxième année. Des messages de sang apparaissent sur les murs, annonçant l'ouverture de la Chambre des Secrets."},
  {a:"J.K.Rowling",t:"Harry Potter et le prisonnier d'Azkaban",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"Royaume-Uni",m:"Harry apprend qu'un dangereux criminel, Sirius Black, s'est évadé d'Azkaban. Les apparences se révèlent trompeuses : les vrais ennemis ne sont pas ceux qu'on croit."},
  {a:"J.K.Rowling",t:"Harry Potter et la coupe de feu",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"Royaume-Uni",m:"Harry est mystérieusement inscrit au Tournoi des Trois Sorciers. La fin marque le retour de Voldemort sous sa forme physique."},
  {a:"J.K.Rowling",t:"Harry Potter et l'ordre du phenix",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"Royaume-Uni",m:"Voldemort est de retour mais le ministère de la Magie refuse de le reconnaître. Une professeure tyrannique prend le contrôle de Poudlard."},
  {a:"J.K.Rowling",t:"Harry Potter et le prince de Sang mêlé",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"Royaume-Uni",m:"Harry bénéficie de leçons privées avec Dumbledore. La fin bouleverse l'équilibre des forces et coûte une vie chère au monde des sorciers."},
  {a:"J.K.Rowling",t:"harry Potter et les reliques de la mort",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"Royaume-Uni",m:"Harry, Ron et Hermione partent en quête des derniers Horcruxes. La bataille finale à Poudlard décide du destin du monde sorcier."},
  {a:"Pierre Bottero",t:"La quête d'Ewilan, tome 1",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"France",m:"Camille découvre qu'elle peut se téléporter dans un monde parallèle nommé Gwendalavir. Un roman d'aventure fantastique porté par deux adolescents attachants."},
  {a:"Pierre Bottero",t:"La quête d'Ewilan, tome 2, les frontières de glace",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"France",m:"Ewilan et ses compagnons poursuivent leur quête à travers les Frontières de Glace. Les Raïs, créatures maléfiques, menacent d'envahir Gwendalavir."},
  {a:"Pierre Bottero",t:"La quête d'Ewilan, tome 3, l'île du destin",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"France",m:"L'île du Destin représente l'ultime étape de la quête d'Ewilan. Un dénouement épique clôt cette trilogie fantastique."},
  {a:"Pierre Bottero",t:"Les mondes d'Ewilan, tome 1, La forêt des captifs",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"France",m:"Suite de la saga, Ewilan et ses amis font face à de nouvelles menaces dans Gwendalavir. La forêt des Captifs renferme des mystères et des dangers inédits."},
  {a:"Pierre Bottero",t:"Les mondes d'Ewilan, tome 2, L'Oeil d'Otolep",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"France",m:"L'Oeil d'Otolep est un artefact puissant convoité par les forces du mal. Ewilan doit mobiliser tout son talent de Dessinatrice pour déjouer les plans ennemis."},
  {a:"Pierre Bottero",t:"Les mondes d'Ewilan, tome 3, les tentacules du mal",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"France",m:"Les tentacules du mal désigne la menace qui se referme sur Gwendalavir. Ewilan affronte ses limites personnelles autant que les dangers extérieurs."},
  {a:"Pierre Bottero",t:"Ellana, tome 1, le Pacte des marchombres",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"France",m:"Ellana est une marchombre, appartenant à une guilde de passeurs. Elle suit un apprentissage rigoureux dans la voie du Pacte. Un personnage fascinant."},
  {a:"Pierre Bottero",t:"Ellana, tome 2, L'envol",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"France",m:"Ellana poursuit son chemin de marchombre avec une liberté et une audace croissantes. Le roman célèbre la liberté, le mouvement et l'art de vivre pleinement."},
  {a:"Pierre Bottero",t:"Ellana, tome 3, La prophétie",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"France",m:"Une prophétie lie le destin d'Ellana à celui de Gwendalavir tout entier. Un tome empreint de maturité qui clôt magnifiquement la saga."},
  {a:"Christopher Paolini",t:"Eragon, tome 1, Le cycle de l'héritage",n:8,t1:"Roman fantasy",t2:"Roman d'aventure",p:"USA",m:"Un jeune fermier découvre un oeuf de dragon et devient Dragonnier. Une epic fantasy écrite par l'auteur à quinze ans."},
  {a:"Christopher Paolini",t:"Eragon, tome 2, L'ainé",n:8,t1:"Roman fantasy",t2:"Roman psychologique",p:"USA",m:"Eragon, désormais Dragonnier reconnu, poursuit sa formation avec Saphira et rejoint les Vardens dans leur lutte contre l'Empire de Galbatorix."},
  {a:"Christopher Paolini",t:"Eragon, tome 3, Brisingr",n:8,t1:"Roman fantasy",t2:"Roman psychologique",p:"USA",m:"Eragon et Saphira continuent leur guerre contre Galbatorix. Les révélations s'accumulent sur les origines de la magie et des Dragonniers."},
  {a:"Marc Lévy",t:"Toutes ces choses qu'on ne s'est pas dites",n:8,t1:"Roman fantastique",t2:"Roman réaliste",p:"France",m:"Julia découvre à la veille de son mariage que son père est mort. Un robot à son effigie prolonge artificiellement sa vie. Une course contre la montre pour rattraper les non-dits familiaux."},
  {a:"Malorie Glackman",t:"Entre chiens et loups, tome 1",n:7,t1:"Roman d'aventure",t2:"Roman de sciences fiction",p:"Royaume-Uni",m:"Dans une Angleterre dystopique du futur, la société est divisée entre les Nihils et les Primas. Callum et Sephy s'aiment malgré l'hostilité. Un roman puissant sur le racisme et l'injustice sociale."},
  {a:"Malorie Glackman",t:"Entre chiens et loups, tome 2",n:7,t1:"Roman d'aventure",t2:"Roman de sciences fiction",p:"Royaume-Uni",m:"Callum et Sephy voient leur amour confronté aux violences de la ségrégation. Les choix désespérés mènent à des conséquences tragiques."},
  {a:"Malorie Glackman",t:"Entre chiens et loups, tome 3",n:7,t1:"Roman d'aventure",t2:"Roman de sciences fiction",p:"Royaume-Uni",m:"La grossesse de Sephy et l'emprisonnement de Callum. Une conclusion bouleversante pour cette saga aux accents de Roméo et Juliette."},
  {a:"Gregory David Roberts",t:"Shantaram",n:9,t1:"Roman biographique",t2:"Roman psychologique",p:"Inde",m:"Lin, évadé de prison australien, se réfugie à Bombay et plonge dans la vie des bidonvilles, de la mafia et des guerres afghanes. Un roman fleuve de 900 pages vibrant d'humanité et d'aventure."},
  {a:"Bernard Werber",t:"Les fourmis",n:8,t1:"Roman de sciences fiction",t2:"Roman fantastique",p:"France",m:"Exploration fascinante de la société des fourmis mêlée à une intrigue humaine. Un roman de sciences fiction qui alterne entre l'univers humain et celui des fourmis."},
  {a:"Douglas Kennedy",t:"L'homme qui voulait vivre sa vie",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Paul Wallach, avocat new-yorkais, tue accidentellement l'amant de sa femme et fuit pour refaire sa vie sous une autre identité. Un thriller psychologique sur la fuite de soi et la quête de sens."},
  {a:"Eric Emmanuel Schmitt",t:"La part de l'autre",n:7,t1:"Roman historique",t2:"Roman psychologique",p:"France",m:"Et si Hitler avait été admis aux Beaux-Arts de Vienne en 1908 ? Schmitt imagine en parallèle la vie d'Adolf H., devenu artiste. Une réflexion bouleversante sur les déterminismes et la naissance du mal."},
  {a:"Eric Emmanuel Schmitt",t:"L'évangile selon Pilate",n:7,t1:"Roman historique",t2:"Roman psychologique",p:"Israël",m:"Les doutes de Jésus la veille de sa crucifixion, puis les lettres de Pilate cherchant à comprendre la disparition du corps. Une méditation humaniste et philosophique."},
  {a:"Jack Kerouac",t:"Sur la route",n:7.5,t1:"Roman réaliste",t2:"Essai narratif",p:"USA",m:"Sal Paradise et Dean Moriarty traversent l'Amérique en voiture, à la recherche d'expériences, de liberté et de sens. Un manifeste littéraire sur la jeunesse, l'errance et le refus des conventions."},
  {a:"Oscar Wilde",t:"Le portrait de Dorian Gray",n:7,t1:"Roman psychologique",t2:"Roman fantastique",p:"Royaume-Uni",m:"Dorian Gray formule le voeu que son portrait vieillisse à sa place. Un conte moral sur la vanité, la corruption de l'âme et le prix de l'immortalité."},
  {a:"Romain Gary",t:"Les cerfs-volants",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"France",m:"Louis Poirier, un postier de Normandie passionné par les cerfs-volants, tombe amoureux de Lila avant la Seconde Guerre mondiale. Un roman sur la résistance, l'amour et la mémoire."},
  {a:"Joseph Kessel",t:"Le lion",n:9,t1:"Roman d'aventure",t2:"Roman réaliste",p:"Kenya",m:"Un roman magnifique sur l'amitié entre une fillette et un lion sauvage au Kenya. Un poème en prose sur la nature, la liberté et l'innocence."},
  {a:"Joseph Kessel",t:"Les cavaliers",n:8,t1:"Roman d'aventure",t2:"Roman historique",p:"Afghanistan",m:"Dans l'Afghanistan du début du XXe siècle, Ouroz part disputer la grande course de bouzkachi malgré sa jambe blessée. Un roman épique sur l'honneur, la fierté et la rudesse des hommes des steppes."},
  {a:"Joel Dicker",t:"La vérité sur l'affaire Harry Quebert",n:9,t1:"Roman policier",t2:"Roman réaliste",p:"USA",m:"Marcus Goldman enquête sur son mentor Harry Quebert accusé du meurtre d'une adolescente disparue trente ans plus tôt. Un thriller haletant mêlant enquête policière et réflexion sur la création littéraire."},
  {a:"Adelaïde de Clermont-Tonnerre",t:"Fourrure",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Une femme se retrouve dans un huis-clos amoureux et dangereux avec un homme fascinant mais instable. Le roman explore les zones d'ombre du désir et les frontières entre passion et emprise."},
  {a:"Donna Tartt",t:"Le Chardonnneret",n:9,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Un garçon survit à un attentat dans un musée et vole un tableau. Un roman épique de 900 pages sur l'art, la perte, l'amitié et la beauté."},
  {a:"Virginie Despentes",t:"Vernon Subutex, tome 1",n:8,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Vernon Subutex, ancien disquaire parisien, se retrouve à la rue après la mort de son ami rockstar. Il erre de canapé en canapé. Despentes dresse un portrait acide et tendre de la France des années 2010."},
  {a:"Paul Auster",t:"Moon Palace",n:7.5,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Marco Stanley Fogg, étudiant new-yorkais orphelin, se laisse glisser vers la clochardise. Des rencontres inattendues vont redonner sens à sa dérive. Un roman sur le hasard, le destin et les pères manquants."},
  {a:"Marc Lévy",t:"Une autre idée du bonheur",n:8,t1:"Roman sentimental (romance)",t2:"Roman réaliste",p:"France",m:"Julia Walsh rencontre par hasard Andrew Stilman, un journaliste. Un roman sentimental et léger sur les deuxièmes chances et les amours qui résistent au temps."},
  {a:"Ken Follet",t:"La Chute des géants, Le Siècle tome 1",n:8,t1:"Roman historique",t2:"Roman d'aventure",p:"Europe",m:"Premier tome de la trilogie du siècle. Le roman suit plusieurs familles à travers la Première Guerre mondiale. Une fresque historique et humaine de grande envergure."},
  {a:"Ken Follet",t:"L'hiver du monde, le Siècle tome 2",n:7,t1:"Roman historique",t2:"Roman d'aventure",p:"Europe",m:"Deuxième tome du Siècle, couvrant la montée du nazisme, la Seconde Guerre mondiale et ses conséquences. Follett tisse avec habileté destins individuels et histoire collective."},
  {a:"Marco Mancassola",t:"La vie sexuelle des super-héros",n:7,t1:"Roman fantastique",t2:"Roman réaliste",p:"Italie",m:"Batman, Superman et leurs pareils traversent une crise existentielle et sentimentale dans l'Italie contemporaine. Un roman satirique et étonnamment mélancolique."},
  {a:"Douglas Kennedy",t:"Cet instant-là",n:7,t1:"Roman réaliste",t2:"Roman sentimental (romance)",p:"USA",m:"Thomas Nesbitt, journaliste américain, reçoit une lettre de la femme qu'il a aimée et perdue. Un roman sur le regret, le temps perdu et les occasions manquées."},
  {a:"Jonas Jonasson",t:"Le vieux qui ne voulait pas souhaiter son anniversaire",n:8,t1:"Roman réaliste",t2:"Roman d'aventure",p:"Suède",m:"Allan Karlsson, cent ans, s'échappe de sa maison de retraite et se retrouve malgré lui mêlé à une affaire criminelle. Son aventure s'entremêle de flashbacks sur une vie extraordinaire. Une comédie décalée et réjouissante."},
  {a:"Aldous Huxcley",t:"Le meilleur des mondes",n:7.5,t1:"Roman de sciences fiction",t2:"Roman psychologique",p:"Royaume-Uni",m:"Dans un futur où les humains sont fabriqués en usine et conditionnés au bonheur, Bernard Marx souffre d'un désir de liberté. Une dystopie majeure sur le bonheur artificiel et la liberté sacrifiée."},
  {a:"David Foenkinos",t:"La délicatesse",n:7.5,t1:"Roman sentimental (romance)",t2:"Roman réaliste",p:"France",m:"Nathalie, jeune veuve, embrasse spontanément Markus, un collègue suédois ordinaire. Un roman sur le retour à la vie après le deuil, doux et précis."},
  {a:"Cristina Alger",t:"Park Avenue",n:7,t1:"Roman policier",t2:"Roman réaliste",p:"USA",m:"Une avocate new-yorkaise plonge dans une enquête de corruption financière. Un thriller élégant dans le milieu des élites de Manhattan."},
  {a:"John Shors",t:"Sous un ciel de marbre",n:7,t1:"Roman historique",t2:"Roman psychologique",p:"Turquie",m:"Au XVIIe siècle, dans un harem ottoman, une esclave irlandaise survit grâce à son talent pour les mathématiques. Un roman historique sensible sur la captivité et la résilience."},
  {a:"Maria Duenas",t:"L'espionne de Tanger",n:7,t1:"Roman historique",t2:"Roman d'aventure",p:"Espagne / Maroc",m:"En 1936, Sira Quiroga, couturière madrilène, fuit en Afrique du Nord et devient une espionne pour les alliés à Tanger. Un roman d'espionnage et d'aventure féminin."},
  {a:"Pierre Lemaitre",t:"Au revoir là-haut",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"France",m:"À la fin de la Première Guerre mondiale, deux rescapés des tranchées montent une arnaque aux monuments aux morts. Pierre Lemaitre explore la brutalité du retour à la vie civile. Prix Goncourt 2013."},
  {a:"Michel Bussy",t:"Un avion sans elle",n:7,t1:"Roman policier",t2:"Roman réaliste",p:"France",m:"Un avion s'écrase en Bretagne et une seule survivante est retrouvée : un nourrisson. Vingt-cinq ans plus tard, deux familles se disputent son identité. Un thriller mécanique et haletant."},
  {a:"Mario Vargas Llosa",t:"Qui a tué Palomio Molero?",n:7,t1:"Roman policier",t2:"Roman réaliste",p:"Pérou",m:"Dans un village péruvien, deux militaires sont retrouvés atrocement torturés. L'enquête révèle les violences et les corruptions d'une société qui ne veut pas de vérité."},
  {a:"Douglas Kennedy",t:"La poursuite du bonheur",n:7,t1:"Roman réaliste",t2:"Roman sentimental (romance)",p:"USA",m:"Sara et Eric, deux Américains des années 40, vivent une histoire d'amour passionnée que la guerre et les conventions sociales vont briser. Un roman sur la fatalité et les regrets."},
  {a:"Alexandre Dumas",t:"Les trois mousquetaires",n:8,t1:"Roman historique",t2:"Roman d'aventure",p:"France",m:"D'Artagnan arrive de Gascogne à Paris avec l'ambition de rejoindre les mousquetaires du roi. Il affronte les machinations du cardinal de Richelieu. Un roman d'aventure et de cape et d'épée incontournable."},
  {a:"David Foenkinos",t:"Charlotte",n:7,t1:"Roman biographique",t2:"Roman historique",p:"France / Allemagne",m:"À partir de milliers d'aquarelles laissées par Charlotte Salomon, jeune artiste juive morte à Auschwitz, Foenkinos reconstitue sa vie. Prix Renaudot 2014."},
  {a:"Maylis de Kérangal",t:"Réparer les vivants",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"En une seule journée, le coeur d'un jeune surfeur mort accidentellement est prélevé et acheminé vers une femme en attente de transplantation. Un roman bouleversant sur la mort, le don et la transmission."},
  {a:"Ken Follet",t:"Les pilliers de la Terre",n:8,t1:"Roman historique",t2:"Roman d'aventure",p:"Royaume-Uni",m:"Ken Follett reconstitue l'Angleterre médiévale du XIIe siècle autour de la construction d'une cathédrale gothique. Une saga de 900 pages, un des romans historiques les plus lus au monde."},
  {a:"Sophie Chauveau",t:"La passion Lippi",n:7,t1:"Roman biographique",t2:"Roman historique",p:"Italie",m:"Filippo Lippi, peintre florentin du XVe siècle, est un génie tourmenté et irrévérencieux. Une plongée dans la Renaissance italienne à travers ses contradictions."},
  {a:"Terry Hayes",t:"Je suis Pilgrim",n:8.5,t1:"Roman policier",t2:"Roman d'aventure",p:"USA / Monde",m:"Un ancien agent des services secrets américains est rappelé pour traquer un terroriste islamiste qui a mis au point une arme bactériologique. Un thriller d'espionnage massif, documenté et haletant."},
  {a:"Joel Dicker",t:"Le livre des Baltimore",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Marcus Goldman raconte la destinée de la branche riche de sa famille. Une tragédie annoncée explore les jalousies, les ambitions et les fractures familiales."},
  {a:"Yuval Noah Harari",t:"Sapiens",n:8,t1:"Documentaire",t2:"Essai",p:"Israël",m:"Yuval Noah Harari retrace l'histoire de l'humanité depuis Homo Sapiens. La capacité à croire en des réalités fictives est la clé de notre succès. Un ouvrage de synthèse devenu incontournable."},
  {a:"Sylvain Tesson et Alexandre Poussin",t:"La marche dans le ciel",n:7,t1:"Roman biographique",t2:"Essai narratif",p:"Himalaya",m:"Sylvain Tesson et Alexandre Poussin traversent l'Himalaya à pied, du Bhoutan au Pakistan. Un récit de voyage sur l'amitié, l'effort physique et la découverte des peuples de la montagne."},
  {a:"Léon Tolstoi",t:"Guerre et paix",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"Russie",m:"Fresque monumentale sur la Russie napoléonienne. Plusieurs familles aristocratiques traversent les guerres napoléoniennes. Une des oeuvres les plus ambitieuses de la littérature mondiale."},
  {a:"Céline",t:"Voyage au bout de la nuit",n:7,t1:"Roman naturaliste",t2:"Roman réaliste",p:"France",m:"Bardamu traverse la Grande Guerre, l'Afrique coloniale, l'Amérique industrielle et les banlieues parisiennes. Un roman nihiliste et révolutionnaire dans sa langue argotique. Un chef-d'oeuvre maudit."},
  {a:"Grégoire Delacourt",t:"La liste de mes envies",n:7,t1:"Roman sentimental (romance)",t2:"Roman réaliste",p:"France",m:"Jocelyne, modeste mercière du Nord, gagne à la loterie et décide de ne pas le dire à son mari. Un roman sur le bonheur simple, la générosité et les illusions que l'argent ne peut satisfaire."},
  {a:"Virginie Despentes",t:"Vernon Subutex, tome 2",n:8,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Vernon, toujours sans domicile fixe, circule entre ses anciens amis à Paris. Le réseau social qui se forme autour de lui est une radiographie de la France contemporaine."},
  {a:"Philipp Mayer",t:"Le fils",n:8,t1:"Roman historique",t2:"Roman réaliste",p:"USA",m:"Sur trois générations, Philip Meyer retrace l'histoire d'une famille texane depuis les guerres indiennes jusqu'au boum pétrolier. Une saga américaine ambitieuse sur la violence fondatrice d'une nation."},
  {a:"Muriel Barbery",t:"L'élégance du hérission",n:7.5,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Renée Michel, concierge cultivée qui cache son intelligence, et Paloma, adolescente brillante qui veut mourir à 12 ans. Un roman sur la beauté cachée derrière les apparences sociales."},
  {a:"Stefan Zweig",t:"Le joueur d'échec",n:8,t1:"Nouvelle",t2:"Roman psychologique",p:"Autriche",m:"Sur un paquebot des années 30, un champion du monde d'échecs est défié par un mystérieux passager. Une nouvelle magistrale sur la tyrannie, la résistance de l'esprit et la folie."},
  {a:"Agatha Christie",t:"Dix petits nègres",n:7,t1:"Roman policier",t2:"Roman psychologique",p:"Royaume-Uni",m:"Dix inconnus sont invités sur une île isolée et chacun est accusé d'un meurtre passé. Un huis-clos policier parfait, le plus vendu de l'histoire de la littérature."},
  {a:"Joel Dicker",t:"Les derniers jours de nos pères",n:7,t1:"Roman historique",t2:"Roman d'aventure",p:"France / Royaume-Uni",m:"Joel Dicker raconte l'histoire de jeunes résistants envoyés en Angleterre pour être formés aux opérations spéciales pendant la Seconde Guerre mondiale."},
  {a:"Patrick Modiano",t:"Rue des boutiques obscures",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Guy Roland, amnésique employé dans une agence de détectives, cherche à retrouver son identité. Un roman sur la mémoire perdue et l'identité comme construction fragile."},
  {a:"Romain Gary",t:"Les racines du ciel",n:7.5,t1:"Roman d'aventure",t2:"Roman réaliste",p:"Tchad",m:"Morel, rescapé des camps nazis, mène une croisade solitaire pour protéger les éléphants d'Afrique. Une réflexion sur la liberté, l'idéal et la condition humaine."},
  {a:"Roy Lewis",t:"Pourquoi j'ai mangé mon père",n:9,t1:"Roman historique",t2:"Roman réaliste",p:"Préhistoire",m:"Roy Lewis, avec une ironie mordante, raconte une préhistoire imaginaire où un père inventeur de génie entraîne sa famille dans des innovations révolutionnaires. Une satire délicieuse de la civilisation."},
  {a:"Boris Vian",t:"L'écume des jours",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Colin, jeune homme fantasque, tombe éperdument amoureux de Chloé. Mais un nénuphar se développe dans ses poumons. Dans un univers surréaliste inventif, Vian dépeint la destruction de l'amour par la maladie."},
  {a:"Jack Black",t:"Personne ne gagne",n:7.5,t1:"Roman réaliste",t2:"Essai narratif",p:"USA",m:"Jack Black, vagabond américain du début du XXe siècle, retrace ses années de prison et de vie hors-la-loi. Un récit autobiographique sur la marginalité et le code d'honneur des criminels de l'époque."},
  {a:"Franz Bartelt",t:"Le fémur de Rimbaud",n:7,t1:"Roman réaliste",t2:"Roman policier",p:"France",m:"Dans un village ardennais, un cadavre est retrouvé. L'enquête révèle les petites lâchetés et les secrets du monde rural. Un roman noir et comique sur la France profonde."},
  {a:"Virginie Despentes",t:"Apocalypse Bébé",n:8,t1:"Roman réaliste",t2:"Roman policier",p:"France / Espagne",m:"Hyène, détective privée, est chargée de retrouver une adolescente disparue à Paris. L'enquête la mène en Espagne. Un roman noir sur la jeunesse contemporaine et ses dérives."},
  {a:"Gila Lustiger",t:"Les insatiables",n:7.5,t1:"Roman réaliste",t2:"Roman policier",p:"Allemagne",m:"Dans le Berlin réunifié des années 90, une banque française cherche à s'imposer sur le marché allemand. Un roman sur la finance, le pouvoir et la culpabilité de la génération de l'après-guerre."},
  {a:"Peter Wohlleben",t:"La vie secrète des arbres",n:7,t1:"Documentaire",t2:"Essai",p:"Allemagne",m:"Le forestier Peter Wohlleben révèle comment les arbres communiquent entre eux et s'entraident. Un ouvrage de vulgarisation scientifique qui a changé le regard de millions de lecteurs sur la forêt."},
  {a:"Léa Colombani",t:"La tresse",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"Inde / Italie / Canada",m:"Trois femmes sur trois continents voient leurs destins s'entrelacer. Leurs combats pour la liberté et la dignité forment une tresse symbolique. Un roman court et puissant sur la résilience féminine."},
  {a:"Edgar Allan Poe",t:"Double assassinat dans la rue Morgue",n:7,t1:"Nouvelle",t2:"Roman psychologique",p:"France",m:"August Dupin, premier détective de fiction, résout un meurtre impossible : deux femmes tuées dans une chambre fermée de l'intérieur. Poe invente le roman policier avec ce texte fondateur."},
  {a:"Virginie Despentes",t:"Vernon Subutex, tome 3",n:8,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Vernon Subutex commence à se transformer en figure quasi-mythique, rassemblant autour de lui des marginaux de toutes sortes dans des rave-parties improvisées. Un miroir de la société française fragmentée."},
  {a:"Fred Vargas",t:"Pars vite et reviens tard",n:7,t1:"Policier",t2:"Roman psychologique",p:"France",m:"Le commissaire Adamsberg enquête sur un mystérieux personnage qui trace des 4 à l'envers sur les portes d'immeubles parisiens. Le lien avec la peste noire du Moyen Âge se révèle terrifiant."},
  {a:"Larry Tremblay",t:"L'orangeraie",n:7,t1:"Roman réaliste",t2:"Roman historique",p:"Proche-Orient",m:"Dans un pays du Proche-Orient en guerre, un père doit choisir lequel de ses deux fils jumeaux sera envoyé combattre. Un roman court et dévastateur sur les ravages de la guerre sur la famille."},
  {a:"Simon Mawer",t:"Le Palais de verre",n:7,t1:"Roman historique",t2:"Roman d'aventure",p:"Tchéquie",m:"En Tchécoslovaquie occupée, une espionne britannique est parachutée pour une mission secrète en 1942. Un roman d'espionnage historique dense et bien documenté."},
  {a:"Diane Peylin",t:"Même les pêcheurs ont le mal de mer",n:8,t1:"Roman réaliste",t2:"Roman d'aventure",p:"Atlantique",m:"Sur un chalutier en mer d'Irlande, une femme embarquée dans un monde d'hommes affronte le roulis et ses propres contradictions. Un roman sur la féminité hors des conventions et la mer comme espace de liberté."},
  {a:"Olivier Bourdeaut",t:"En attendant Bojangles",n:7,t1:"Roman sentimental (romance)",t2:"Roman réaliste",p:"France",m:"Un père fantaisiste et une mère exubérante élèvent leur fils dans un monde de danses, de fêtes et de mensonges poétiques. La mère bascule dans la folie. Un roman sur l'amour fou et le déni face à la maladie."},
  {a:"Catherine Poulain",t:"Le grand marin",n:7,t1:"Roman réaliste",t2:"Roman d'aventure",p:"Irlande / Atlantique",m:"Lili quitte la France et embarque comme matelot sur des chalutiers en mer d'Irlande. Dans ce monde d'hommes, rude et beau, elle cherche à fuir et à trouver sa place."},
  {a:"Michel Houellebecq",t:"Les particules élémentaires",n:8,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Bruno et Michel, demi-frères nés d'une mère hippie égoïste, suivent deux destins opposés. Houellebecq dresse un portrait nihiliste de la société occidentale post-68. Un roman choc et visionnaire."},
  {a:"Fred Vargas",t:"Temps glaciaires",n:7.5,t1:"Policier",t2:"Roman psychologique",p:"France",m:"Le commissaire Adamsberg enquête sur une série de meurtres en cercles robespiérristes qui rejouent symboliquement la Terreur. Une enquête qui plonge dans la Révolution française et ses passions."},
  {a:"Delphine de Vigan",t:"D'après une histoire vraie",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Une auteure à succès est approchée par une femme mystérieuse qui semble vouloir prendre sa place. Delphine de Vigan brouille les frontières entre fiction et réalité dans un thriller psychologique vertigineux."},
  {a:"Laurent Binet",t:"La septième fonction du langage",n:8,t1:"Roman policier",t2:"Roman réaliste",p:"France",m:"En 1980, Roland Barthes est renversé par une camionnette. Un enquêteur et un sémiologue découvrent que Barthes transportait le secret d'une théorie révolutionnaire sur le langage. Un thriller intellectuel et jubilatoire."},
  {a:"Pierre Lemaitre",t:"Trois jours et une vie",n:7,t1:"Roman policier",t2:"Roman réaliste",p:"France",m:"Antoine, douze ans, tue accidentellement le petit voisin. Il cache le corps et vit avec ce secret pendant des décennies. Un roman sur la culpabilité, le hasard et les destins que l'on brise sans le vouloir."},
  {a:"Jean Diwo",t:"Au temps ou la Joconde parlait",n:8,t1:"Roman historique",t2:"Roman psychologique",p:"Italie",m:"Dans la Florence de la Renaissance, l'auteur imagine une rencontre entre Léonard de Vinci, le jeune peintre Raphaël et d'autres figures de l'époque. Un roman historique ludique sur l'art et la création."},
  {a:"Anthony Doerr",t:"Toute la lumière que nous ne pouvons voir",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"France / Allemagne",m:"Marie-Laure, aveugle française, fuit Paris pendant l'Occupation. Werner, orphelin allemand, est enrôlé dans la Wehrmacht. Leurs destins convergent vers Saint-Malo en 1944. Un roman bouleversant, Prix Pulitzer."},
  {a:"Gael Faye",t:"Petit pays",n:7,t1:"Roman biographique",t2:"Roman historique",p:"Burundi",m:"Gabriel, dix ans, grandit dans le Burundi des années 90. La guerre civile et le génocide rwandais vont déchirer son monde et lui voler son enfance. Un récit autobiographique bouleversant."},
  {a:"Daniel Pennac",t:"La fée carabine",n:7.5,t1:"Roman policier",t2:"Roman réaliste",p:"France",m:"Le commissaire Malaussène est accusé à tort d'avoir tiré sur des vieillards dans le quartier de Belleville. Une intrigue loufoque mêlant dealers de drogue, retraités résistants et famille recomposée."},
  {a:"Yasmina Khadra",t:"Dieu n'habite pas la Havane",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"Cuba",m:"Juan del Monte Jonás, chanteur cubain vieillissant, tente de survivre à La Havane et de garder sa dignité face au déclin. Un roman sur Cuba, la musique, la vieillesse et la résistance silencieuse à l'oubli."},
  {a:"Marc Dugain",t:"Ils vont tuer Robert Kennedy",n:7,t1:"Roman historique",t2:"Roman policier",p:"USA",m:"En 1968, à la veille de l'assassinat de Robert Kennedy, plusieurs destins se croisent et s'entremêlent. Un roman sur les années Kennedy, la violence politique américaine et l'espoir assassiné."},
  {a:"Stieg Larson",t:"Millenium, les hommes qui n'aimaient pas les femmes, tome 1",n:8,t1:"Polar",t2:"Roman psychologique",p:"Suède",m:"Mikael Blomkvist, journaliste suédois, enquête avec Lisbeth Salander sur la disparition d'une jeune femme dans une famille de grands industriels. Un thriller noir et féministe qui a révolutionné le genre."},
  {a:"Romain Gary",t:"La vie devant soi",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Momo, un petit garçon arabe de dix ans, grandit chez Madame Rosa, une vieille prostituée juive. Un roman sur la vieillesse, l'enfance et la dignité humaine, écrit sous le pseudonyme Émile Ajar."},
  {a:"Colson Whitehead",t:"Underground Railroad",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"USA",m:"Cora, esclave dans une plantation de Georgie, s'évade grâce au chemin de fer souterrain. Un roman allégorique et puissant sur l'esclavage et la liberté."},
  {a:"Léon Tolstoi",t:"Le cheval",n:8,t1:"Nouvelle",t2:"Roman réaliste",p:"Russie",m:"Une nouvelle de Tolstoï racontée du point de vue d'un cheval. Un chef-d'oeuvre de la littérature sur la condition, la liberté et la mort."},
  {a:"Pierre Assouline",t:"Gaston Gallimard, Un demi siècle d'édition française",n:7,t1:"Roman biographique",t2:"Roman psychologique",p:"France",m:"Pierre Assouline retrace la vie de Gaston Gallimard à travers un demi-siècle d'édition française. Un portrait fascinant d'un éditeur qui a publié Proust, Gide, Céline, Sartre."},
  {a:"Kazuo Ishiguro",t:"Le géant enfoui",n:7.5,t1:"Roman fantastique",t2:"Roman historique",p:"Royaume-Uni",m:"Dans une Angleterre médiévale plongée dans l'oubli, un vieux couple part à la recherche de leur fils perdu. Une brume mystérieuse efface les souvenirs de tous. Un roman sur la mémoire collective et le pardon."},
  {a:"Virginie Despentes",t:"Baise moi",n:8,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Deux femmes marginales, Manu et Nadine, décident de se venger du monde après avoir subi des violences extrêmes. Un road movie violent, roman manifeste de Despentes sur la rage féminine."},
  {a:"Michel Houellebecq",t:"Soumission",n:7,t1:"Roman réaliste",t2:"Roman de sciences fiction",p:"France",m:"En 2022, un parti musulman arrive au pouvoir en France par les urnes. François, professeur de littérature, observe avec passivité cette mutation de la société. Un roman politique et provocateur."},
  {a:"Mario Vargas Llosa",t:"Tours et détours de la vilaine fille",n:9,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Ricardo, Péruvien à Paris, est amoureux depuis l'enfance d'une femme insaisissable et cruelle qu'il retrouve à différentes étapes de sa vie. Un roman sur la passion destructrice et magnifique."},
  {a:"Lao She",t:"Le pousse-pousse",n:8,t1:"Roman réaliste",t2:"Roman naturaliste",p:"Chine",m:"Xiangzi, jeune paysan ambitieux venu à Pékin, rêve de posséder son propre pousse-pousse. Malgré ses efforts acharnés, il est sans cesse rattrapé par la misère et l'exploitation."},
  {a:"Romain Gary",t:"La promesse de l'aube",n:9,t1:"Roman biographique",t2:"Essai narratif",p:"France",m:"Romain Gary retrace sa relation fusionnelle avec sa mère, femme passionnée et fantasque qui a tout sacrifié pour faire de son fils un grand homme. Un hommage poignant à l'amour maternel et à ses ambiguïtés."},
  {a:"André Gide",t:"Les caves du Vatican",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Lafcadio, jeune homme sans attaches morales, commet un crime gratuit dans un train pour prouver sa liberté absolue. Gide construit une satire de la bourgeoisie et de la religion catholique."},
  {a:"Amin Maalouf",t:"Samarcande",n:9,t1:"Roman historique",t2:"Roman d'aventure",p:"Perse / Monde",m:"Omar Khayyam, poète et mathématicien perse du XIe siècle, compose ses Rubayiat dans un carnet qui traversera l'histoire jusqu'au naufrage du Titanic. Maalouf tisse une épopée sur huit siècles de civilisation arabe et persane."},
  {a:"Amélie Nothomb",t:"Stupeur et tremblement",n:7,t1:"Roman biographique",t2:"Roman réaliste",p:"Belgique",m:"Amélie, Belge employée dans une grande entreprise japonaise, voit sa carrière s'effondrer à cause d'incompréhensions culturelles et d'humiliations répétées. Un roman comique et cruel sur le choc des cultures."},
  {a:"Pierre Lemaitre",t:"Couleurs de l'incendie",n:8,t1:"Roman historique",t2:"Roman réaliste",p:"France",m:"Suite de Au revoir là-haut, le roman suit Madeleine Péricourt dans la France des années 30. Elle cherche à se venger de ceux qui ont ruiné son père. Un roman politique et haletant."},
  {a:"Honoré de Balzac",t:"Le père Goriot",n:7,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Le père Goriot sacrifie toute sa fortune à ses deux filles ingrates pour qu'elles brillent dans la haute société parisienne. Rastignac observe cette tragédie. Balzac dresse un tableau impitoyable."},
  {a:"Allen Carr",t:"Arrêter de fumer c'est facile",n:8,t1:"Bien être & santé",t2:"Essai",p:"Royaume-Uni",m:"Allan Carr expose sa méthode psychologique pour arrêter de fumer sans sevrage ni volonté. Un ouvrage culte traduit en de nombreuses langues, qui a aidé des millions de fumeurs."},
  {a:"Kazuo Ishiguro",t:"Les vestiges du jour",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"Royaume-Uni",m:"Stevens, majordome anglais, entreprend un voyage pour rendre visite à une ancienne collègue. Il se remémore ses années de service auprès d'un lord collaborationniste. Un roman sur la dignité, le sacrifice de soi et les regrets."},
  {a:"Giuseppe Tomasi Di Pascual",t:"Le Guépard",n:8,t1:"Roman historique",t2:"Roman réaliste",p:"Italie",m:"Don Fabrizio, prince sicilien vieillissant, observe avec mélancolie la fin de l'aristocratie. Un chef-d'oeuvre de la littérature italienne sur le déclin d'un monde."},
  {a:"Jonathan Safran Foer",t:"Faut-il manger les animaux",n:8,t1:"Traité écologique",t2:"Essai",p:"USA",m:"Jonathan Safran Foer enquête sur l'industrie agroalimentaire mondiale. Un essai qui a convaincu des milliers de lecteurs de réduire leur consommation de viande."},
  {a:"Perrine et Charles Hervé-Gruyer",t:"Permaculture, sauver la terre, nourrir les hommes",n:8,t1:"Traité écologique",t2:"Manuel",p:"France",m:"Manuel pratique sur les principes de la permaculture. Les auteurs, maraîchers bios en Normandie, transmettent leur expérience de la ferme du Bec Hellouin. Un livre de référence pour l'agriculture régénératrice."},
  {a:"Jean Martin Fortier",t:"Le jardinier maraîcher",n:7,t1:"Manuel",t2:"Traité écologique",p:"Canada",m:"Jean-Martin Fortier, maraîcher québécois, partage les techniques de son exploitation ultra-productive. Un manuel pratique sur le maraîchage biologique intensif à petite échelle."},
  {a:"Masanobu Fukuoka",t:"La révolution d'un seul brun de paille",n:7,t1:"Traité écologique",t2:"Essai",p:"Japon",m:"Masanobu Fukuoka, agriculteur japonais, décrit sa méthode d'agriculture naturelle sans labour, sans engrais, sans pesticide. Une philosophie autant qu'une pratique. Un texte fondateur du mouvement agroécologique."},
  {a:"James Rebansk",t:"Une vie de berger",n:7,t1:"Roman biographique",t2:"Roman psychologique",p:"France",m:"Un berger raconte ses années de transhumance avec ses moutons dans les Alpes. Un témoignage sur une vie hors du temps, rythmée par les saisons et la relation profonde avec les animaux."},
  {a:"Bénédicte Manier",t:"Un million de révolution tranquilles",n:8,t1:"Traité écologique",t2:"Essai",p:"Monde",m:"Bénédicte Manier recense à travers le monde des initiatives citoyennes qui transforment l'économie, l'agriculture, l'énergie et les liens sociaux. Un livre d'espoir sur les alternatives concrètes."},
  {a:"Albert Camus",t:"L'étranger",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"Algérie",m:"Meursault apprend la mort de sa mère sans émotion apparente, puis tue un Arabe sur une plage. Jugé autant pour son indifférence que pour son crime. Le roman emblématique de l'absurde camusien."},
  {a:"Amélie Nothomb",t:"Riquet à la houppe",n:7,t1:"Roman biographique",t2:"Roman psychologique",p:"France",m:"Deux enfants nés à la même heure : l'un beau et stupide, l'autre laid et brillant. Nothomb réinterprète le conte de Perrault en roman philosophique sur la complémentarité entre l'intelligence et la beauté."},
  {a:"Jack London",t:"L'appel de la forêt",n:8,t1:"Roman d'aventure",t2:"Roman réaliste",p:"USA / Canada",m:"Buck, chien de famille docile, est vendu comme chien de traîneau dans le Grand Nord canadien. Au fil des épreuves, il retrouve son instinct sauvage. Un roman sur la liberté et l'adaptation."},
  {a:"Lydia et Claude Bourguignon",t:"Manifeste pour une agriculture durable",n:8,t1:"Traité écologique",t2:"Essai",p:"France",m:"Les microbiologistes Lydia et Claude Bourguignon alertent sur la mort des sols agricoles et proposent des solutions pour les restaurer. Un manifeste technique et philosophique."},
  {a:"Sue Hubbell",t:"Une année à la campagne",n:7,t1:"Roman biographique",t2:"Roman psychologique",p:"USA",m:"Sue Hubbell, apicultrice dans les Ozarks américains, raconte une année de vie à la ferme avec ses abeilles, ses animaux et ses voisins. Un récit contemplatif sur la vie au rythme des saisons."},
  {a:"John Steinbeck",t:"Des souris et des hommes",n:7,t1:"Roman réaliste",t2:"Roman naturaliste",p:"USA",m:"Deux ouvriers agricoles itinérants cherchent à réaliser leur rêve américain dans la Californie des années 30. Une novella poignante sur l'amitié et l'espoir brisé."},
  {a:"Romain Gary",t:"Chien blanc",n:7,t1:"Roman réaliste",t2:"Essai narratif",p:"USA",m:"Un chien dressé à attaquer les Noirs est recueilli par Romain Gary. Un roman sur le racisme américain et la possibilité de réhabilitation."},
  {a:"Nicolas Fargues & Iegor Gran",t:"Ecrire à l'élastique",n:7.5,t1:"Roman épistolaire",t2:"Roman psychologique",p:"France",m:"Deux auteurs de styles très différents partagent un roman à quatre mains sur leurs vies et leurs visions contradictoires de la littérature. Un dialogue littéraire original et drôle."},
  {a:"Virginie Despentes",t:"Bye bye Blondie",n:8,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Deux adolescentes punk des années 80 se retrouvent vingt-cinq ans plus tard dans des vies très différentes. Leur amour de jeunesse reprend vie. Un roman sur la classe sociale, le temps qui passe et les amours impossibles."},
  {a:"Gabriel Talent",t:"My absolute darling",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Turtle Alveston, quatorze ans, vit sous l'emprise de son père violent dans les forêts de Californie du Nord. La rencontre avec deux adolescents va éveiller en elle l'idée que la liberté existe. Un roman brutal et bouleversant."},
  {a:"Antoine de Saint Exupéry",t:"Vol de nuit",n:7,t1:"Roman d'aventure",t2:"Roman réaliste",p:"Argentine",m:"Rivière, directeur d'une compagnie aérienne, impose à ses pilotes des vols de nuit dangereux. Fabien, l'un d'eux, disparaît dans une tempête. Saint-Exupéry interroge le sens du sacrifice."},
  {a:"J.D. Salinger",t:"L'attrape cœur",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Holden Caulfield, renvoyé de son pensionnat, erre pendant plusieurs jours dans New York. Sa voix adolescente désenchantée critique le monde des adultes avec mordant. Un roman de formation culte."},
  {a:"Joseph Kessel",t:"Le coup de grâce",n:8,t1:"Roman d'aventure",t2:"Roman réaliste",p:"France",m:"Un officier français en Extrême-Orient est confronté à un dilemme moral après avoir ordonné l'exécution d'un homme. Un court roman intense sur la culpabilité et l'honneur."},
  {a:"Michel Houellebecq",t:"Sérotonine",n:7,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Florent-Claude Labrouste renonce à tout pour disparaître dans un hôtel parisien. Il observe la crise agricole française et réfléchit à ses amours perdues. Un roman sombre et mélancolique sur la dépression."},
  {a:"Fabrice Humbert",t:"Comment vivre en héros",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Un lycéen ordinaire découvre qu'il est l'héritier d'une longue lignée de héros. Il doit choisir entre une vie commune et l'accomplissement d'un destin exceptionnel. Un roman sur le courage ordinaire."},
  {a:"Jean-Christophe Rufin",t:"Le tour du monde du roi Zibeline",n:7.5,t1:"Roman historique",t2:"Roman d'aventure",p:"Monde",m:"Benyowski, aventurier polonais du XVIIIe siècle, s'évade de Sibérie et traverse le monde entier en quête de gloire et de liberté. Rufin retrace le destin rocambolesque de ce personnage historique méconnu."},
  {a:"Jack London",t:"Martin Eden",n:9,t1:"Roman réaliste",t2:"Roman biographique",p:"USA",m:"Au début du XXème, un marin d'Oakland veut devenir écrivain. Parcours semé d'obstacles économiques, sociaux et sentimentaux. Un roman autobiographique magnifique sur la création et l'ambition."},
  {a:"Victor Hugo",t:"Le dernier jour d'un condamnée",n:8,t1:"Roman réaliste",t2:"Roman historique",p:"France",m:"Un homme est condamné à mort. Du fond de sa cellule, il se prépare et laisse le lecteur se perdre dans ses réflexions. Un pamphlet humaniste contre la peine de mort."},
  {a:"Robert Badinter",t:"Idiss",n:7,t1:"Roman biographique",t2:"Essai narratif",p:"France",m:"Destin d'une famille juive issue des ghettos polonais qui immigre en France au début du XXème siècle, s'intègre à la République Française, connaît l'ascension sociale et sent poindre progressivement la menace antisémite."},
  {a:"Yann Queffélec",t:"Les noces barbares",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Nicole est victime d'un viol dans sa jeunesse. De ce drame naît Ludovic, enfant troublé et peu compris. Du grenier de ses grands-parents à l'épave-refuge, Ludovic cherche à renouer avec sa mère."},
  {a:"Simon Liberati",t:"California girls",n:7,t1:"Roman réaliste",t2:"Roman naturaliste",p:"USA",m:"Un soir de 1969 en Californie, des hippies sous l'emprise de la drogue assassinent Sharon Tate. On suit les pas de la famille Manson, avant et pendant le drame."},
  {a:"Sylvain Tesson",t:"La panthère blanche",n:7,t1:"Roman d'aventure",t2:"Essai narratif",p:"Tibet",m:"Sylvain Tesson accompagne Vincent Muniet au Tibet. À l'affût sous -20°C, ils assistent à l'épanouissement de la vie à l'état sauvage et traquent la panthère blanche."},
  {a:"Amélie Nothomb",t:"Soif",n:7,t1:"Roman historique",t2:"Roman psychologique",p:"Belgique",m:"Voyage au fil des pensées de Jésus, de sa condamnation à sa crucifixion. Retour sur son destin, autocritique de ses miracles. Avoir soif, être vivant."},
  {a:"André Gide",t:"L'école des femmes",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Le journal d'un mariage vu d'abord par le mari, puis par la femme qui révèle une tout autre réalité. Un roman sur le pouvoir et la résistance silencieuse."},
  {a:"Jean-Paul Dubois",t:"Tout le monde n'habite pas le monde de la même façon",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"Canada",m:"Paul Hansen, en prison au Canada, se souvient de sa vie avec Winnie et de leur Airstream transformé en restaurant. Un roman sur la liberté, la générosité et les petits bonheurs. Prix Goncourt 2019."},
  {a:"Camus",t:"La Peste",n:8,t1:"Roman réaliste",t2:"Essai philosophique",p:"Algérie",m:"La peste fait son apparition dans les rues et logis des Oranais. La ville se ferme et le mal s'infiltre dans les corps et les coeurs. Suivons le docteur Rieu qui lutte contre le fléau."},
  {a:"Patrick Rambaud",t:"La Bataille",n:8,t1:"Roman historique",t2:"Roman psychologique",p:"Autriche",m:"Bataille d'Essling : les armées de Napoléon adossées au Danube face à l'armée autrichienne. 40 000 morts en deux jours. Une reconstitution d'une précision et d'une intensité rares."},
  {a:"Nicolas Mathieu",t:"Leurs enfants après eux",n:7,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Pendant l'été 1992 dans une ville sidérurgique lorraine sinistrée, plusieurs adolescents naviguent entre ennui, premiers amours et violence. Prix Goncourt 2018, une fresque sociale et générationnelle."},
  {a:"Amin Maalouf",t:"Le rocher de Tanios",n:8,t1:"Roman historique",t2:"Roman d'aventure",p:"Liban",m:"Tanios de Kfaryabda, son exil avec son père assassin, ses amours et son implication dans des complots internationaux. Un roman sur le Liban, l'honneur et les destins brisés."},
  {a:"Laurent Gaudé",t:"Le soleil des Scorta",n:8,t1:"Roman réaliste",t2:"Roman historique",p:"Italie",m:"Destin des membres du clan Scorta, depuis le bandit qui viola, puis Rocco son fils riche, ses 3 enfants laissés à la débrouille. Le tout sous le soleil brûlant des Pouilles."},
  {a:"Shan Sa",t:"La joueuse de Go",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"Chine",m:"Au Mandchoukouo des années 30, une jeune Chinoise et un officier japonais se rencontrent autour d'un jeu de go, métaphore de leurs désirs et du conflit qui les divise. Un roman élégant et sensuel."},
  {a:"Stefan Zweig",t:"La confusion des sentiments",n:7.5,t1:"Roman psychologique",t2:"Roman réaliste",p:"Autriche",m:"Walter, jeune étudiant, est hébergé par son professeur adulé et sa femme. Il découvre les passions secrètes du vieil homme. Une novelle de Zweig sur le désir, l'admiration et la dissimulation."},
  {a:"Joseph Kessel",t:"Belle de jour",n:8,t1:"Roman psychologique",t2:"Roman réaliste",p:"France",m:"Séverine découvre les instincts de son corps malgré l'amour qu'elle ressent pour Pierre son mari. Un roman troublant sur le désir, le secret et la double vie."},
  {a:"Stefan Zweig",t:"Brûlant secret",n:7,t1:"Nouvelle",t2:"Roman psychologique",p:"Autriche",m:"Edgar, jeune garçon de 12 ans, tente de percer le mystère de la relation qui étreint sa mère et un jeune Baron lors d'une semaine campagnarde."},
  {a:"John Steinbeck",t:"Les raisins de la colère",n:9,t1:"Roman d'aventure",t2:"Roman naturaliste",p:"USA",m:"Une famille de métayers de l'Oklahoma perd ses terres et part sur la route vers les champs de Californie. La mère autoritaire, Tom le frère, Al qui s'occupe du camion. Fresque dingue."},
  {a:"Luis Sepulveda",t:"Le vieux qui lisait des romans d'amour",n:8,t1:"Roman réaliste",t2:"Roman d'aventure",p:"Équateur",m:"Le vieux Antonio Jose Bolivar Proanio a vécu auprès de Shuars pendant des années. Il fait profiter les gringos de ses talents de chasseur, alors que sévit le jaguar triste."},
  {a:"Paul Auster",t:"Léviathan",n:9,t1:"Roman réaliste",t2:"Roman policier",p:"USA",m:"Sachs, écrivain militant, disparaît et son ami retrouve son corps. En reconstituant sa vie, il découvre que Sachs s'était transformé en militant radical. Un roman sur les idéaux politiques et l'amitié entre hommes."},
  {a:"Emmanuel Carrère",t:"Yoga",n:7,t1:"Essai personnel / subjectif",t2:"Essai narratif",p:"France / Grèce",m:"Petit livre sur le yoga. Carrère détricote les affres de ses dépressions et son séjour sur l'île grecque avec les réfugiés. Texte saccadé, introspectif et humoristique."},
  {a:"Emmanuel Carrère",t:"L'adversaire",n:8,t1:"Essai narratif",t2:"Roman réaliste",p:"France",m:"Emmanuel Carrère raconte l'affaire Jean-Claude Romand, homme qui pendant dix-huit ans a prétendu être médecin à l'OMS et a tué toute sa famille quand le mensonge a failli être découvert. Fascinant et glaçant."},
  {a:"Philippe Claudel",t:"L'archipel du Chien",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Dans un village du littoral méditerranéen, trois corps d'immigrés échouent sur la plage. Les habitants doivent choisir entre humanité et conformisme. Un roman allégorique sur la lâcheté collective."},
  {a:"Daniel Quinn",t:"Ishmael",n:9,t1:"Roman philosophique",t2:"Roman psychologique",p:"USA",m:"Un homme répond à une annonce : Maître cherche élève sérieux. Il découvre qu'Ishmael est un gorille capable de parler par télépathie. Leur dialogue philosophique interroge les mythes fondateurs de la civilisation occidentale."},
  {a:"Paulette Jiles",t:"Des nouvelles du monde",n:7,t1:"Roman historique",t2:"Roman d'aventure",p:"USA",m:"En 1870 au Texas, le capitaine Kidd, vieil homme, est chargé de ramener une petite fille blanche capturée par les Kiowas. Un roman western mélancolique sur la civilisation et l'appartenance."},
  {a:"Steve Tesich",t:"Karoo",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Saul Karoo, scénariste alcoolique et cynique, doit réécrire un film sur la mort d'un père. Ce travail réveille des questions sur la paternité et le sens de sa propre vie. Un roman rare, drôle et dévastateur."},
  {a:"Ken Follet",t:"Le crépuscule et l'aube",n:7,t1:"Roman historique",t2:"Roman d'aventure",p:"Angleterre",m:"Préquel des Piliers de la Terre, ce roman se déroule au VIIIe siècle, à l'époque des invasions vikings et de la naissance de l'Angleterre. Une fresque historique ambitieuse."},
  {a:"Hervé le Tellier",t:"L'anomalie",n:7,t1:"Roman de sciences fiction",t2:"Roman réaliste",p:"USA / France",m:"Un avion atterrit deux fois à New York à trois mois d'intervalle, avec les mêmes passagers. Ce roman choral explore ce que cela implique pour des dizaines de destins individuels. Prix Goncourt 2020."},
  {a:"Julien Viel",t:"Article 353 du code pénal",n:8,t1:"Roman policier",t2:"Roman réaliste",p:"France",m:"Un homme est jugé pour le meurtre d'un promoteur immobilier qui voulait bétonner la côte bretonne. Il ne nie pas les faits mais veut être compris. Un roman sur la justice et l'attachement à la terre."},
  {a:"Jean Paul Dubois",t:"Une vie française",n:8,t1:"Roman réaliste",t2:"Roman biographique",p:"France",m:"Paul Blick retrace sa vie depuis l'enfance dans les années 60 jusqu'à la cinquantaine, épousant les grandes mutations de la France. Prix Femina 2004."},
  {a:"Dostoievski",t:"Les frères Karamazov",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"Russie",m:"Fiodor Pavlovitch, ivrogne mesquin, a 3 fils : Aliocha le doux, Ivan le rationnel et Dimitri le passionné. L'histoire se tisse autour du meurtre du père. Qui a tué ?"},
  {a:"Laurent Gaudé",t:"Eldorado",n:7,t1:"Roman réaliste",t2:"Roman historique",p:"Afrique / Méditerranée",m:"Un capitaine de bateau transportant des migrants africains et un adolescent soudanais fuyant la guerre croisent leurs destins en Méditerranée. Gaudé explore la migration et la culpabilité de l'Europe."},
  {a:"Férenc Karinthy",t:"Épépé",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"Hongrie",m:"Comment réagirions-nous, perdus dans un monde en tout point différent du nôtre, dans lequel aucun des codes qui nous sont connus ne s'applique ? Budai brosse le tableau d'un chemin possible."},
  {a:"Camille Laurens",t:"Fille",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Plusieurs générations de femmes dans une famille, de la grand-mère à la petite-fille. Camille Laurens explore la transmission des identités féminines."},
  {a:"Julien Viel",t:"Un roman américain",n:7.5,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Un Français échoue dans une petite ville américaine du Midwest et observe avec étrangeté les codes de cette Amérique profonde. Un roman sur l'exil volontaire, le regard de l'étranger et la solitude choisie."},
  {a:"Guy de Maupassant",t:"Une vie",n:8,t1:"Roman psychologique",t2:"Nouvelle",p:"France",m:"Jeanne, jeune femme normande, se marie avec un homme qu'elle découvre brutal et infidèle. Elle passe sa vie à attendre un bonheur qui ne vient jamais. Maupassant signe son unique roman."},
  {a:"Jean-Baptiste Andrea",t:"Des diables et des saints",n:8,t1:"Roman d'aventure",t2:"Roman psychologique",p:"France",m:"Un jeune pianiste interne dans un orphelinat catholique découvre l'amitié, la musique et les mystères d'une institution qui cache de lourds secrets. Un roman initiatique et sombre."},
  {a:"Marcel Theroux",t:"Au nord du monde",n:8.5,t1:"Roman d'aventure",t2:"Roman naturaliste",p:"Monde futur",m:"Dans un futur post-apocalyptique gelé, une femme seule traverse les terres désolées à la recherche d'autres survivants. Un roman de survie poétique sur la fin du monde et la résilience humaine."},
  {a:"Chilly Gonzales",t:"Plaisirs (non) coupables",n:7,t1:"Essai",t2:"Roman psychologique",p:"France",m:"Chilly Gonzales, pianiste et provocateur, livre ses réflexions sur les plaisirs jugés honteux — la musique pop, les émissions de téléréalité — avec humour et intelligence. Un essai décomplexé sur la culture populaire."},
  {a:"Pascal Garnier",t:"La théorie du panda",n:7,t1:"Roman policier",t2:"Roman réaliste",p:"France",m:"Gabriel, homme discret au passé mystérieux, arrive dans une petite ville normande et noue des relations avec des habitants solitaires. Un roman noir mélancolique, maître du genre."},
  {a:"Ron Rash",t:"Un pied au paradis",n:7.5,t1:"Roman réaliste",t2:"Roman historique",p:"USA",m:"L'histoire tragique d'un couple américain, d'un agriculteur stérile et de sa femme qui cherche des solutions, racontée du point de vue des différents personnages."},
  {a:"Emmanuel Carrère",t:"Limonov",n:7,t1:"Roman biographique",t2:"Roman réaliste",p:"Russie / Monde",m:"La vie d'Edouard Savenko, autoproclamé Limonov. Poète bohème russe, délinquant, valet, écrivain, loyal, mégalo, de l'après-guerre à nos jours."},
  {a:"Leila Slimani",t:"Le pays des autres",n:7.5,t1:"Roman historique",t2:"Roman réaliste",p:"Maroc",m:"Histoire d'une émigrée alsacienne au Maroc et de son mari cultivateur, de leur relation, des changements du pays qui cherche son indépendance."},
  {a:"Yasmina Reza",t:"Serge",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"Pologne",m:"Une famille en visite à Auschwitz. Yasmina Reza observe avec acuité les tensions et non-dits familiaux dans ce lieu chargé d'histoire."},
  {a:"Atiq Rahimi",t:"Syngué Sabour",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"Afghanistan",m:"Une femme veille son mari plongé dans le coma. Pendant des jours, elle lui confie tous les secrets qu'elle ne lui a jamais dits. Un roman intense sur la condition féminine en Afghanistan. Prix Goncourt 2008."},
  {a:"David Diop",t:"Frère d'âme",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"France / Allemagne",m:"Alfa Ndiaye, tirailleur sénégalais dans la Première Guerre mondiale, porte sur lui le corps de son ami mort. Un roman intense sur la guerre et les soldats africains. Prix Renaudot 2018."},
  {a:"Yasmina Khadra",t:"Les hirondelles de Kaboul",n:8,t1:"Roman historique",t2:"Roman réaliste",p:"Afghanistan",m:"Dans le Kaboul des talibans, on croise de belles âmes en peine. La vie d'Atiq le geôlier et de sa femme malade, de Mohsen et Zunaira sa femme sublime et triste."},
  {a:"Nina Bouraoui",t:"Otages",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Nina Bouraoui explore à travers l'histoire d'une famille franco-algérienne les thèmes de l'identité, de l'appartenance et du corps comme territoire."},
  {a:"Julia Deck",t:"Propriété privée",n:8,t1:"Roman psychologique",t2:"Roman réaliste",p:"France",m:"Un couple fait l'acquisition d'une maison dans un éco-quartier. Le rêve sur le papier, un nouveau départ. La réalité leur réserve quelques surprises entre problèmes de couple et dégâts immobiliers."},
  {a:"JRR Tolkien",t:"Les enfants de Hurin",n:7,t1:"Roman fantastique",t2:"Roman d'aventure",p:"Terre du Milieu",m:"Turin Turambar, fils de Húrin, est poursuivi par la malédiction de Morgoth. Un récit tragique de Tolkien publié posthumement. Un destin shakespearien dans la Terre du Milieu."},
  {a:"JRR Tolkien",t:"Le seigneur des anneaux tome 1",n:8,t1:"Roman fantastique",t2:"Roman d'aventure",p:"Terre du Milieu",m:"Frodon Sacquet hérite d'un anneau magique et doit quitter la Comté pour le détruire dans les feux de la Montagne du Destin. Le commencement de l'épopée de Tolkien."},
  {a:"Tom Wolf",t:"Moi Charlotte Simmons",n:7,t1:"Roman biographique",t2:"Roman historique",p:"USA",m:"Charlotte, jeune fille brillante issue d'une famille modeste, débarque dans une des plus prestigieuses universités du pays. Le dilemme de sa vie : s'intégrer ou rester elle-même."},
  {a:"Chris Offutt",t:"Nuits appalaches",n:8,t1:"Roman réaliste",t2:"Roman policier",p:"USA",m:"Dans le Kentucky rural, un homme sort de prison et tente de reconstruire sa vie dans une communauté marquée par la pauvreté et la violence. Un roman de l'Amérique profonde, sobre et juste."},
  {a:"Jørn Riel",t:"Le jour avant le lendemain",n:8,t1:"Roman réaliste",t2:"Roman d'aventure",p:"Groenland",m:"Au Groenland, une vieille femme eskimo et un jeune garçon restent seuls sur une île à sécher la viande. Les premières tempêtes arrivent avant les hommes venus les rechercher."},
  {a:"Nicolas Mathieu",t:"Conemara",n:7,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Hélène, brillante cadre parisienne en mission dans sa Lorraine natale, retrouve Christophe, ancien flirt resté au pays. Leurs retrouvailles font remonter tout ce que chacun a fui."},
  {a:"Ken Follet",t:"Pour rien au monde",n:7,t1:"Roman historique",t2:"Roman d'aventure",p:"Monde",m:"À travers trois familles en Angleterre, aux États-Unis et en Asie centrale, Follett explore la montée du fondamentalisme islamique et ses conséquences mondiales."},
  {a:"Didier Van Cauwelaert",t:"Un aller simple",n:7,t1:"Roman réaliste",t2:"Roman sentimental (romance)",p:"France / Maroc",m:"Aziz, jeune Français d'origine marocaine, est renvoyé au Maroc par le gouvernement, pays qu'il n'a jamais connu. Une comédie douce-amère sur l'identité et l'absurdité administrative."},
  {a:"Ian McEwan",t:"Samedi",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"Royaume-Uni",m:"24h dans la vie du neurochirurgien Henry Perowne, entre les faits divers du quotidien et un événement violent qui le bouscule, avec en toile de fond l'actualité omniprésente."},
  {a:"Colin Niel",t:"Entre fauves",n:9,t1:"Roman policier",t2:"Roman réaliste",p:"France",m:"Dans le Vercors, un ranger retrouve le cadavre d'un berger. Colin Niel signe un polar environnemental ancré dans la nature sauvage."},
  {a:"George Orwell",t:"1984",n:8,t1:"Roman de sciences fiction",t2:"Roman psychologique",p:"Royaume-Uni",m:"Dans un état totalitaire, Winston Smith tente de résister mentalement au régime de Big Brother. Un roman visionnaire sur la surveillance, la manipulation et l'anéantissement de l'individu."},
  {a:"Julia Deck",t:"Monument national",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Un homme retrouve des photos de sa mère dans les années 70. À travers ces images il tente de reconstituer une identité et une filiation. Un roman court et fragmenté sur la mémoire familiale."},
  {a:"Anthony Doerr",t:"La cité des nuages et des oiseaux",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"Monde",m:"5 personnages, 3 époques, 1 livre en commun. De la prise de Constantinople à la science-fiction, en passant par la société moderne d'une Amérique qui dérape."},
  {a:"Ante Tomic",t:"Miracle à la combe aux Aspic",n:8,t1:"Roman réaliste",t2:"Roman policier",p:"Croatie",m:"L'histoire rocambolesque d'une famille croate de 4 garçons et d'un père. L'aîné cherche une femme et ça chamboule tout. Drôle et émouvant."},
  {a:"Annie Ernaux",t:"La place",n:8,t1:"Roman biographique",t2:"Essai narratif",p:"France",m:"Annie Ernaux retrace la vie de son père, ouvrier devenu petit commerçant normand, et la distance sociale qui s'est creusée entre eux. Un récit sobre et tranchant sur la honte de classe. Prix Nobel."},
  {a:"Yannick Bestaven",t:"Mon tour du monde en 80 jours",n:8,t1:"Roman biographique",t2:"Roman psychologique",p:"Monde",m:"Yannick Bestaven raconte son tour du monde à la voile en solitaire lors du Vendée Globe 2020-2021 qu'il a remporté. Un récit d'aventure maritime sur la solitude et la communion avec l'océan."},
  {a:"Emilie Bronte",t:"Les Hauts de Hurle Vent",n:7.5,t1:"Roman réaliste",t2:"Roman psychologique",p:"Royaume-Uni",m:"Heathcliff, orphelin recueilli par la famille Earnshaw, développe un amour passionnel et destructeur pour Catherine. Rejeté par la société, il consacre sa vie à la vengeance. Un roman gothique d'une intensité extraordinaire."},
  {a:"Amélie Nothomb",t:"Premier sang",n:8,t1:"Roman biographique",t2:"Roman psychologique",p:"Belgique",m:"Patrick Nothomb grandit élevé par ses grands-parents, pantois de sa mère qui ne le voit pas. C'est fluide, ironique, sympa à lire."},
  {a:"Nicolas Vanier",t:"Solitudes blanches",n:8,t1:"Roman d'aventure",t2:"Essai narratif",p:"Grand Nord",m:"Klaus le trappeur part à la poursuite de son ami Prug, rendu fou de chagrin suite à la mort de son fils. Une traque humaine à deux voix entre les dangers du grand froid."},
  {a:"Jakob Guazon",t:"Abondance",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Henry à 2 moments de sa vie : en tant que fils puis en tant que père. Les galères lui tombent dessus dans un pays qui ne protège pas. Les personnages sans filtre."},
  {a:"Philip Roth",t:"Pastorale américaine",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Seymour Levov avait tout pour mener une vie de rêve américain. Beau, sportif, marié à miss New Jersey. Mais sa vie déraille. Sa fille Merry fait exploser la poste de Newark."},
  {a:"Laurine Roux",t:"Sur l'épaule des géants",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Dans un village isolé du Vercors, une femme élève seule ses filles dans une nature sauvage. L'arrivée d'un homme va troubler cet équilibre fragile. Un roman sur la maternité, la protection et la menace."},
  {a:"Lorenzo Mediano",t:"Du givre sur les épaules",n:8,t1:"Roman réaliste",t2:"Roman d'aventure",p:"Espagne / France",m:"Un guide de montagne pyrénéen accompagne dans les années de plomb espagnoles des réfugiés qui fuient Franco vers la France. Un roman sur la montagne, le courage et la solidarité."},
  {a:"Salomé Kiner",t:"Grande couronne",n:7.5,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Deux femmes, l'une de la banlieue parisienne, l'autre du centre, voient leurs existences se croiser dans la grande couronne francilienne. Un roman sur les inégalités territoriales et les vies empêchées."},
  {a:"Guy de Maupassant",t:"La parure",n:8,t1:"Nouvelle",t2:"Roman réaliste",p:"France",m:"Mathilde Loisel emprunte un collier de diamants pour briller à une soirée et le perd. Elle passe des années à rembourser sa dette avant de découvrir la vérité finale. La nouvelle la plus célèbre de Maupassant."},
  {a:"Stephen King",t:"Dolorès Claiborne",n:8,t1:"Roman psychologique",t2:"Roman d'aventure",p:"USA",m:"Dolorès n'a pas tué sa riche employeuse la semaine dernière. Par contre son mari il y a trente ans oui, et elle va vous expliquer pourquoi."},
  {a:"Guillaume Aubin",t:"L'arbre de colère",n:7,t1:"Roman réaliste",t2:"Roman historique",p:"France",m:"Dans une ville industrielle française en déclin, un homme se bat pour sauver un arbre centenaire menacé par un projet immobilier. Autour de cette résistance symbolique, des vies s'animent."},
  {a:"Kazuo Ishiguro",t:"Auprès de toi toujours",n:8,t1:"Roman psychologique",t2:"Roman sentimental (romance)",p:"Royaume-Uni",m:"Dans un futur proche, Kath et ses amis ont grandi dans un pensionnat pour enfants élevés comme donneurs d'organes. Ishiguro signe un roman mélancolique sur la mémoire, l'amour et la résignation."},
  {a:"Jack London",t:"Loup de mer",n:8,t1:"Roman d'aventure",t2:"Roman réaliste",p:"USA",m:"Wolf Larsen, capitaine brutal et philosophe nihiliste, règne en tyran sur son schooner. Jack London oppose l'intelligence et la force brute dans ce roman sur la volonté de puissance."},
  {a:"Jack London",t:"Le mexicain",n:8,t1:"Nouvelle",t2:"Roman d'aventure",p:"Mexique",m:"Jack London raconte l'histoire d'un jeune révolutionnaire mexicain qui, pour financer la cause, participe à un match de boxe truqué face à un champion. Un conte sur la dignité et le combat pour la liberté."},
  {a:"Paul Auster",t:"Invisible",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"USA",m:"Adam Walker, étudiant new-yorkais des années 60, rencontre un professeur charismatique. Cette rencontre va hanter sa vie entière. Un roman sur la mémoire, la culpabilité et les liens qui nous définissent."},
  {a:"Alexandre Dumas",t:"Le compte de Monte Cristiano",n:8,t1:"Roman historique",t2:"Roman psychologique",p:"France / Monde",m:"Edmond Dantès, marin injustement emprisonné, s'évade et devient le Comte de Monte-Cristo pour assouvir une vengeance minutieusement préparée. Un chef-d'oeuvre de la littérature populaire française."},
  {a:"François Henri Deserable",t:"Mon maître et mon vainqueur",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Un professeur de littérature solitaire accueille une jeune étudiante en difficulté et noue avec elle une relation intellectuelle intense et ambiguë. Un roman sur le désir, le pouvoir et les frontières pédagogiques."},
  {a:"Hermann Hesse",t:"Le loup des steppes",n:7,t1:"Nouvelle",t2:"Roman psychologique",p:"Allemagne",m:"Harry Haller, intellectuel allemand de cinquante ans, vit en dehors de la société bourgeoise. Une rencontre mystérieuse le plonge dans une nuit de révélations. Un roman initiatique de Hesse sur le dualisme de l'âme humaine."},
  {a:"Sorj Chalandon",t:"L'enragé",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"France",m:"La Teigne, un gamin du centre pénitentiaire pour enfants, s'échappe de l'enfer avec 55 comparses. Il est le seul à ne pas être repris. Un roman brutal sur la liberté et la violence du système."},
  {a:"Amélie Nothomb",t:"Les aérostats",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"Belgique",m:"Ange, jeune répétitrice, se lie d'amitié avec Pie, lycéen surdoué mais mal dans sa peau, en lui faisant découvrir la littérature. Une relation ambiguë et touchante sur la transmission et la solitude adolescente."},
  {a:"Jean Baptiste Andrea",t:"Veiller sur elle",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"Italie",m:"Mimo, sculpteur génial de petite taille, rencontre Viola, fille de noble génois. À travers un siècle d'histoire italienne, des fastes de la Belle Époque au fascisme, leur lien résiste à tout. Prix Goncourt 2023."},
  {a:"Aamin Maalouf",t:"Le labyrinthe des égarés",n:8,t1:"Essai géopolitique",t2:"Essai",p:"Monde",m:"Réflexions géopolitiques sur les grandes forces qui ont façonné le monde moderne : le Japon, l'URSS, la Chine, les USA. Une analyse fascinante de l'histoire mondiale contemporaine par Maalouf."},
  {a:"Alexandre Soljenitsyne",t:"Une journée d'Ivan Denissovitch",n:7,t1:"Roman historique",t2:"Roman réaliste",p:"Russie",m:"Ivan Denissovitch passe une journée dans un camp du Goulag stalinien. Soljenitsyne décrit avec une précision clinique la survie dans l'univers concentrationnaire soviétique."},
  {a:"Marguerite Yourcenar",t:"Les mémoires d'Hadrien",n:8,t1:"Roman historique",t2:"Roman psychologique",p:"Rome",m:"Hadrien vient d'Espagne. Sa vie d'homme de pouvoir, ses campagnes pour maintenir la paix, son amant Antinoüs, sa mère spirituelle Plotine. Un chef-d'oeuvre de la littérature historique."},
  {a:"Eric Chacour",t:"Ce que je sais de toi",n:8,t1:"Roman psychologique",t2:"Roman réaliste",p:"Égypte / France",m:"Thomas rencontre Samir, jeune médecin franco-égyptien, et s'éprend de lui. Au fil de leur relation, les secrets et les souffrances de Samir émergent progressivement. Un roman sur l'amour entre hommes et l'identité."},
  {a:"Jean-Baptiste Andréa",t:"Cent millions d'années et un jour",n:7,t1:"Roman réaliste",t2:"Roman d'aventure",p:"France",m:"Un paléontologue passionné part en montagne à la recherche d'un fossile exceptionnel. La quête devient une obsession. Un roman sur la passion scientifique et les frontières de l'obsession."},
  {a:"Thomas Mann",t:"Les Buddenbrook",n:7,t1:"Roman réaliste",t2:"Roman historique",p:"Allemagne",m:"Destin d'une famille allemande du 19ème siècle, depuis l'arrière-grand-père négociant au petit-fils. Déchéance progressive d'une grande famille bourgeoise."},
  {a:"Albert Camus",t:"L'artiste au travail",n:7,t1:"Nouvelle",t2:"Roman psychologique",p:"France",m:"Un peintre parisien à succès voit sa vie envahie par les sollicitations de la célébrité au point de ne plus pouvoir créer. Une nouvelle sur le paradoxe de la reconnaissance et la nécessité de la solitude pour l'artiste."},
  {a:"Frederic Beigbeder",t:"Oona et Salinger",n:7.5,t1:"Roman historique",t2:"Roman psychologique",p:"USA",m:"L'histoire de la liaison entre Oona O'Neill et J.D. Salinger pendant la Seconde Guerre mondiale, avant qu'elle épouse Charlie Chaplin. Un roman romantique sur la jeunesse et les grandes passions."},
  {a:"Primo Levi",t:"Si c'est un homme",n:8,t1:"Roman historique",t2:"Essai narratif",p:"Italie",m:"Primo Levi témoigne de sa déportation à Auschwitz. Avec une précision clinique et sans haine, il décrit la déshumanisation nazie. Un livre fondateur de la littérature concentrationnaire."},
  {a:"J.D. Salinger",t:"L'attrape-coeurs",n:8,t1:"Roman psychologique",t2:"Roman réaliste",p:"USA",m:"Un jeune viré de son collège crapahute dans NY en attendant que ses parents l'apprennent. Il arrête pas de réfléchir, rien n'accroche si ce n'est sa soeur Phoebe et son frère décédé."},
  {a:"Françoise Sagan",t:"Bonjour tristesse",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Une jeune fille prête à tout pour retrouver l'équilibre avec son père, en vacances d'été. Un roman bref et fulgurant sur l'adolescence, la manipulation et la cruauté."},
  {a:"Boris Vian",t:"J'irai cracher sur vos tombes",n:7,t1:"Roman réaliste",t2:"Roman naturaliste",p:"USA",m:"Lee Anderson, jeune noir à la peau claire, infiltre la communauté blanche d'une ville du Sud américain pour se venger du lynchage de son frère. Une critique féroce du racisme américain."},
  {a:"Sladjana Nina Perkovic",t:"Dans le fossé",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Une femme raconte depuis un hôpital psychiatrique les événements qui l'ont conduite là. Un roman sur la santé mentale, la violence et les marges de la société."},
  {a:"Joël Dicker",t:"L'affaire Alaska Sanders",n:7,t1:"Roman policier",t2:"Roman réaliste",p:"USA",m:"Onze ans après une affaire résolue, un nouvel élément remet tout en cause. Dicker signe un thriller policier tendu et bien construit."},
  {a:"Uzma Aslam Khan",t:"Transgression",n:7,t1:"Roman réaliste",t2:"Roman psychologique",p:"Pakistan",m:"Dans le Pakistan contemporain, une femme tombe amoureuse d'un homme appartenant à une autre communauté. Leur amour défie les lois tribales, religieuses et familiales. Un roman sur la liberté des femmes."},
  {a:"Christophe Ono-dit-Biot",t:"Birmane",n:9,t1:"Roman d'aventure",t2:"Roman psychologique",p:"Birmanie",m:"Un journaliste part en Birmanie rencontrer Kun Sa, personnage légendaire. Il rencontre Julie, expat française. La dictature surveille tout. Une aventure haletante entre journalisme, amour et fuite."},
  {a:"Marguerite Duras",t:"Un barrage contre le Pacifique",n:7,t1:"Roman réaliste",t2:"Roman naturaliste",p:"Indochine",m:"Joseph, Suzanne et la mère en Indochine, face au Pacifique, tentent de faire pousser des choses, mais la marée monte et les agents du cadastre menacent. Ils veulent partir, mais comment."},
  {a:"Giuliano da Empoli",t:"Le mage du Kremlin",n:7.5,t1:"Roman historique",t2:"Roman réaliste",p:"Russie",m:"Vadim Baranov, spin-doctor du Kremlin et ex-conseiller de Poutine, raconte son ascension dans les coulisses du pouvoir russe. Un portrait fascinant des mécanismes de la propagande et du pouvoir autoritaire."},
  {a:"Paul Auster",t:"Monsieur Vertigo",n:7,t1:"Roman d'aventure",t2:"Roman psychologique",p:"USA",m:"Walter Clairborne Rawley, orphelin américain des années 20, apprend à voler sous la tutelle d'un maître mystérieux. Auster s'empare du mythe de l'homme volant pour explorer l'Amérique du XXe siècle."},
  {a:"Jean Malauri",t:"Les derniers rois de Thulé",n:8,t1:"Essai ethnographique",t2:"Roman psychologique",p:"Groenland",m:"Jean Malaurie part vivre 1 an auprès des esquimaux de Thulé. Il décrit un peuple aux conditions de vie dures, dans le dénuement mais heureux et fier. Il les accompagne jusqu'à traverser la banquise vers le Canada."},
  {a:"Carl Woznicka-Brousse",t:"Une vie derrière le mur",n:7,t1:"Roman biographique",t2:"Roman psychologique",p:"Israël",m:"Accroche avec le 7 octobre et explication touchante du pourquoi du livre. Sympa de lire les mots de quelqu'un qui ressemble. On s'attache aux personnages."},
  {a:"Michael Morpurgo",t:"Le roi Arthur",n:7,t1:"Roman jeunesse",t2:"Roman psychologique",p:"Royaume-Uni",m:"Le roi Arthur, petit maltraité qui trouve l'épée et devient roi. Sa campagne pour pacifier l'Angleterre, la création de Camelot, l'arrivée de Lancelot et la fin tragique."},
  {a:"Étienne de la Boétie",t:"Discours de la servitude volontaire",n:7.5,t1:"Essai argumentatif",t2:"Essai",p:"France",m:"Réflexion sur les mécanismes de la domination et de la soumission. Pourquoi les hommes, naturellement libres, choisissent-ils de vivre dans la servitude ? Un texte intemporel sur le pouvoir et la résistance à l'injustice."},
  {a:"Raymond Radiguet",t:"Le diable au corps",n:8,t1:"Roman psychologique",t2:"Roman historique",p:"France",m:"Radiguet raconte la liaison d'un lycéen de seize ans avec une femme de vingt ans dont le mari est au front. Un chef-d'oeuvre de l'analyse du désir adolescent."},
  {a:"Amélie de Bourbon Parme",t:"L'ascension - Tome 1 des trafiquants d'éternité",n:7,t1:"Roman historique",t2:"Roman psychologique",p:"Italie",m:"Ascension d'Alessandro Farnese à Florence à la cour de Laurent de Médicis, puis à Rome aux côtés de la famille Borgia et son fils César Borgia, dépeint comme le Prince de Machiavel."},
  {a:"Giuliano Da Empoli",t:"L'heure des prédateurs",n:7.5,t1:"Essai géopolitique",t2:"Essai",p:"Monde",m:"Analyse géopolitique des nouvelles formes de prédation politique et économique dans le monde contemporain. Un essai salutaire pour comprendre les rapports de force actuels."},
  {a:"Nathan Hill",t:"Bien être",n:7,t1:"Roman psychologique",t2:"Roman réaliste",p:"USA",m:"Nathan Hill raconte la vie d'un couple américain depuis leur rencontre dans les années 90, explorant les attentes, les déceptions et les illusions du bien-être moderne."},
  {a:"Philippe Labro",t:"Un été dans l'ouest",n:8,t1:"Roman d'aventure",t2:"Roman psychologique",p:"USA",m:"Un jeune Français, college boy, découvre l'Ouest américain, le Colorado, les filles qui jouent de la guitare sur la route, les hommes qui travaillent dans les bois, la fraternité. Le ton est superbe."},
  {a:"Dany Laferrière",t:"Comment faire l'amour avec un Nègre sans se fatiguer",n:8,t1:"Roman psychologique",t2:"Roman réaliste",p:"Canada",m:"Un jeune Haïtien à Montréal observe avec ironie les femmes blanches guidées par leurs fantasmes exotiques. Un roman décapant sur le racisme inconscient, la sexualité et l'identité. Provocateur et jubilatoire."},
  {a:"Nikos Kokàntzis",t:"Gioconda",n:7.5,t1:"Roman sentimental",t2:"Roman psychologique",p:"Grèce",m:"Un amour de jeunesse au temps de la guerre. L'enfer et le paradis au même moment. Raconté par l'auteur qui avait alors 15 ans."},
  {a:"Stephen Markley",t:"Ohio",n:8,t1:"Roman psychologique",t2:"Roman réaliste",p:"USA",m:"4 anciens camarades de lycée désormais trentenaires se retrouvent : Bill le toxicomane activiste, Stacey la lesbienne, Dan le vétéran sympa, Tina violée par la star du foot. Vie d'une jeunesse déboussolée depuis le 11/09."},
  {a:"Clara Dupont-Monod",t:"La révolte",n:7,t1:"Roman historique",t2:"Roman psychologique",p:"France",m:"Histoire racontée par Richard Coeur de Lion. Sa haine de son père, contre qui il se révolte, ses batailles, l'amour de sa mère Aliénor."},
  {a:"Olivier Norek",t:"Les guerriers de l'hiver",n:7.5,t1:"Roman historique",t2:"Roman psychologique",p:"Finlande",m:"En 1939, l'armée soviétique attaque la Finlande. Pays de 4 millions d'habitants contre 130 millions. Et pourtant le petit se défend pendant 3 mois, mené par des hommes vaillants tels que Simo Häyhä."},
  {a:"Laurent Mauvigné",t:"Continuer",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"France / Kazakhstan",m:"Samuel est en dérive. Sa mère l'emmène faire du cheval au Kazakhstan et l'on suit leur aventure en même temps que les flashbacks qui éclairent leur parcours à tous les deux. Superbe."},
  {a:"Jonathan Coe",t:"Le coeur de l'Angleterre",n:7,t1:"Roman réaliste",t2:"Roman historique",p:"Angleterre",m:"Ce volume couvre les années 2010-2018, de la montée du Brexit aux fractures culturelles. Coe observe avec tendresse et ironie une société qui se déchire sur ses propres contradictions."},
  {a:"Laurine Roux",t:"Trois fois la colère",n:7,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Trois fragments, trois visages de la colère : une femme dans une forêt, une autre dans une ville, une dernière dans un monde qui s'effondre. Un triptyque poétique et sombre sur la violence contemporaine."},
  {a:"Maupassant",t:"Bel-Ami",n:8,t1:"Roman réaliste",t2:"Roman naturaliste",p:"France",m:"Georges Duroy, jeune homme sans scrupules mais séduisant, gravit les échelons de la société parisienne en séduisant les femmes qui peuvent lui être utiles. Un portrait au vitriol du journalisme et de la bourgeoisie corrompue."},
  {a:"Laurent Mauvigner",t:"La maison vide",n:8,t1:"Roman réaliste",t2:"Roman psychologique",p:"France",m:"Un homme revient dans la maison familiale vide après un deuil. Dans le silence des pièces, il essaie de reconstituer des fragments d'une vie commune. Un roman sur le deuil, la mémoire et l'absence."},
  {a:"Guy de Maupassant",t:"Boule de suif",n:7,t1:"Nouvelle",t2:"Roman réaliste",p:"France",m:"Dans une diligence fuyant l'armée prussienne, des bourgeois normands contraignent Boule de Suif à coucher avec l'officier ennemi pour les libérer. Une fois sauvés, ils la méprisent. Chef-d'oeuvre de la satire sociale."},
  {a:"Gisèle Pélicot (+ Judith Perrignon)",t:"Et la joie de vivre",n:7,t1:"Essai narratif",t2:"Essai personnel / subjectif",p:"France",m:"Gisèle Pélicot raconte comment elle a découvert que son mari la droguait et la faisait violer par des inconnus pendant des années. Un témoignage poignant d'une femme qui a décidé de ne pas avoir honte."},
  {a:"Thomas Piketty",t:"Le capital au XXIe siècle",n:7,t1:"Essai politique / sociologique",t2:"Essai argumentatif",p:"France",m:"Thomas Piketty analyse deux siècles de données sur les revenus et le patrimoine pour démontrer que les inégalités économiques augmentent structurellement dans le capitalisme. Un ouvrage de référence en économie politique."},
];

const SUGGESTIONS = [
  {label:"😂 Je veux rire", q:"Je veux rire"},
  {label:"✈️ Je pars en Italie", q:"Je pars en voyage en Italie"},
  {label:"💭 Un livre qui fait réfléchir", q:"Un livre qui fait réfléchir"},
  {label:"💔 Une belle histoire d'amour", q:"Une belle histoire d'amour"},
  {label:"⚡ Court et addictif", q:"Quelque chose de court et addictif"},
  {label:"🌿 Style Amélie Nothomb", q:"Dans le style d'Amélie Nothomb mais plus léger"},
  {label:"🌍 Dépaysement total", q:"Un livre qui se passe dans un pays lointain et exotique"},
  {label:"🔍 Un bon polar", q:"Un bon polar haletant"},
];

const AF = "'Abril Fatface', serif";
const CV = "'Caveat', cursive";
const BG = "#EEF0EC";
const GR = "#3D5A4A";
const BL = "#7A9BAA";
const LG = "#8A9E8A";

export default function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Caveat:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const doSearch = async (q) => {
    if (!q?.trim() || loading) return;
    setLoading(true);
    setResult(null);
    const bd = BOOKS.map(b => ({t:b.t,a:b.a,n:b.n,t1:b.t1,p:b.p,m:b.m.slice(0,120)}));
    const sys = `Tu es Cyprien, un ami passionné de lecture qui conseille ses proches avec chaleur, humour et sincérité — comme un pote qui te tend un livre en disant "fais-moi confiance, tu vas adorer". Tu réponds UNIQUEMENT en JSON valide, sans markdown ni backticks.`;
    const usr = `Voici ma bibliothèque personnelle (291 livres notés >=7) :
${JSON.stringify(bd)}

Un ami me pose cette question : "${q}"

RÈGLES ABSOLUES :
1. Propose UNIQUEMENT des livres présents dans cette liste (titre + auteur doivent correspondre exactement)
2. Priorise les livres les mieux notés (champ "n")
3. Maximum 3 recommandations
4. Si aucun livre ne correspond vraiment, sois honnête — ne mens jamais, ne propose rien hors de la liste
5. Ton : chaleureux, spontané, direct, comme un ami sincère qui parle à son pote

Réponds en JSON pur :
{
  "found": true,
  "intro": "une phrase d'accroche chaleureuse et spontanée",
  "books": [{"titre": "titre exact", "auteur": "auteur exact", "why": "pourquoi je te conseille ce livre, 2-3 phrases à la 1ère personne"}],
  "fallback": null
}
Si rien ne correspond :
{
  "found": false,
  "intro": "message honnête et sympa",
  "books": [],
  "fallback": "suggestions pour reformuler ou pistes thématiques"
}`;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          model: "claude-sonnet-4-5",
          max_tokens: 1000,
          system: sys,
          messages: [{role: "user", content: usr}],
        }),
      });
      const data = await res.json();
      const text = (data.content || []).map(i => i.text || "").join("").trim();
      // Strip possible markdown code fences
      const clean = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
      setResult(JSON.parse(clean));
    } catch(e) {
      setResult({error: true, msg: e.message});
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setResult(null); setQuery(""); };

  return (
    <div style={{minHeight:"100vh", background:BG, fontFamily:"Inter, -apple-system, sans-serif", padding:"48px 20px 80px"}}>
      <div style={{maxWidth:660, margin:"0 auto"}}>

        <div style={{textAlign:"center", marginBottom:52}}>
          <p style={{fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", color:LG, marginBottom:14, fontWeight:500}}>
            Bibliothèque de Cyprien
          </p>
          <h1 style={{fontFamily:AF, fontWeight:400, fontSize:44, color:GR, margin:"0 0 16px", lineHeight:1.1}}>
            Une idée pour ta<br />prochaine lecture ?
          </h1>
          <p style={{fontFamily:CV, fontSize:22, color:BL, margin:0, lineHeight:1.5}}>
            Selon ton envie du moment, je te conseille un livre parmi mes lectures préférées des 10 dernières années. Écris ta recherche et je te fais 3 propositions.
          </p>
        </div>

        <div style={{position:"relative", marginBottom:16}}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === "Enter" && doSearch(query)}
            placeholder="Décris ce que tu cherches…"
            style={{
              width:"100%", boxSizing:"border-box",
              padding:"18px 64px 18px 24px",
              fontSize:16, border:"2px solid transparent",
              borderRadius:18, outline:"none",
              background:"#fff",
              boxShadow:"0 4px 24px rgba(0,0,0,0.07)",
              color:"#1C2E22", transition:"border-color 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = BL}
            onBlur={e => e.target.style.borderColor = "transparent"}
          />
          <button onClick={() => doSearch(query)} disabled={loading}
            style={{
              position:"absolute", right:12, top:"50%", transform:"translateY(-50%)",
              background: loading ? "#C5CEC5" : GR,
              border:"none", borderRadius:12,
              width:42, height:42, cursor: loading ? "default" : "pointer",
              color:"#fff", fontSize:20,
              display:"flex", alignItems:"center", justifyContent:"center",
              transition:"background 0.2s",
            }}>
            {loading ? "·" : "→"}
          </button>
        </div>

        {!result && !loading && (
          <div style={{display:"flex", flexWrap:"wrap", gap:8, marginBottom:40}}>
            {SUGGESTIONS.map(s => (
              <button key={s.q} onClick={() => { setQuery(s.q); doSearch(s.q); }}
                style={{
                  background:"#fff", border:"1.5px solid #C8D5C8",
                  borderRadius:100, padding:"8px 16px",
                  fontSize:13, color:"#4A6A5A", cursor:"pointer",
                  transition:"all 0.15s", fontFamily:"inherit",
                }}
                onMouseEnter={e => { e.target.style.borderColor = BL; e.target.style.color = BL; }}
                onMouseLeave={e => { e.target.style.borderColor = "#C8D5C8"; e.target.style.color = "#4A6A5A"; }}
              >{s.label}</button>
            ))}
          </div>
        )}

        {loading && (
          <div style={{textAlign:"center", padding:"48px 0", color:LG}}>
            <div style={{fontSize:28, marginBottom:12}}>📚</div>
            <p style={{fontFamily:CV, fontSize:22, margin:0}}>Cyprien fouille dans sa bibliothèque…</p>
          </div>
        )}

        {result && !loading && (
          <div style={{marginTop:4}}>
            {result.error ? (
              <div style={{background:"#fff", borderRadius:16, padding:24, textAlign:"center", color:LG}}>
                <p style={{margin:"0 0 8px"}}>Oups, une erreur est survenue. Réessaie !</p>
                {result.msg && <p style={{fontSize:12, color:"#aaa", margin:0}}>{result.msg}</p>}
              </div>
            ) : (
              <>
                <div style={{background:"#fff", borderRadius:16, padding:"20px 24px", marginBottom:20, boxShadow:"0 2px 12px rgba(0,0,0,0.05)", borderLeft:"4px solid "+BL}}>
                  <p style={{fontFamily:CV, fontSize:21, margin:0, color:GR, lineHeight:1.6}}>
                    💬 {result.intro}
                  </p>
                </div>

                {result.found && (result.books || []).map((b, i) => (
                  <div key={i} style={{background:"#fff", borderRadius:16, padding:"24px 28px", marginBottom:14, boxShadow:"0 2px 16px rgba(0,0,0,0.06)"}}>
                    <p style={{fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", color:BL, margin:"0 0 8px", fontWeight:600}}>
                      Conseil #{i+1}
                    </p>
                    <h3 style={{fontFamily:AF, fontWeight:400, margin:"0 0 4px", fontSize:24, color:GR}}>{b.titre}</h3>
                    <p style={{margin:"0 0 14px", color:LG, fontSize:13}}>{b.auteur}</p>
                    <p style={{fontFamily:CV, fontSize:19, margin:0, color:"#2E4A38", lineHeight:1.6}}>{b.why}</p>
                  </div>
                ))}

                {!result.found && result.fallback && (
                  <div style={{background:"#fff", borderRadius:16, padding:"24px 28px", boxShadow:"0 2px 12px rgba(0,0,0,0.05)"}}>
                    <p style={{fontFamily:CV, fontSize:19, margin:0, color:GR, lineHeight:1.6}}>{result.fallback}</p>
                  </div>
                )}

                <button onClick={reset} style={{marginTop:24, background:"transparent", border:"none", color:LG, cursor:"pointer", fontSize:13, fontFamily:"inherit", padding:0}}>
                  ← Nouvelle recherche
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
