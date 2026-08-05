---
title: Knowledge Cycle Architecture (3)
date: 2026-06-09
source_type: document
wiki-ready: true
type: "source-summary"
---
Dynamic Knowledge System -Architecture

From ingest→Al-Vault→Quartzpublish→ Live search-longboardfella.com.au/wiki

PIPELINEOVERVIEW

▌ [Image 1]: [Image: description timed out]

INGESTPATHWAYS

Email→Document(pdf_textify)

AttachaPDForDoCXtoanemailsenttotheLab.ThedocumentisconvertedtostructuredMarkdown
using Docling - a structural parser that preserves headings, tables, and layout.
A vision language model (VLM)pass then describesembeddedfigures,charts,and
diagramsasinline text.Theresultingmarkdown is
automaticallywrittentotheknowledgevault.

Email→Note(vault_note)

Sendanyplain-textemail totheLab-nokeywordorattachmentrequired.Thebodyiscaptured
immediatelyasavaultnoteandroutedforwikiclassification.Aconfirmationreplyissentwi
thajob number.Minimumbodylength:30 characters.

Include a URLintheemail body.Thepageisscraped,boilerplatestripped,and the
articleextracted as
cleanMarkdownwithYAMLfrontmatter.AlsoavailableviatheLabDocumentToolsinterface.

YouTube→Summary(youtube_summarise)

SendaYouTubeURLtotheLab.Thevideotranscriptisextracted
andsummarisedintoastructurednote withtitle,keypoints,and
metadata.Thenoteiswrittento thevault lab-notesfolderwithwiki-ingested: true
frontmatter and published automatically on the next pipeline cycle.

VAULTWRITERBRIDGE

A localPythonprocessruns everyfiveminutes,pollingtheproductionjobqueuevia an
authenticatedAPl.It fetchescompleted
conversions,addswiki-readyfrontmatter(title,date,source_type),andcommitsthe
filestotheAl-Vaultgitrepository.Thevaultisthesinglesourceoftruthforallwiki
content.

CLASSIFICATION&ENRICHMENT

All incoming content is classified into one of 51knowledge domains with 200+
topic groups. The taxonomy
coversareasincludingAl&Agents,SocietyPolitics&Conflict,ToolsPlatforms&Infrastruc
ture,Science&
Physics,Anthropology&Ethnography,andmore.Classificationusesarule-basedsystemwith
LLM validationforambiguouscases.

Afterclassification,enrichmentextractsentities(people,organisations,concepts)and
mapsrelationships andtables.

PUBLISHING&SEARCH

TheNemoClawpipelinebuilds a static site from the vault usingQuartz v4and
publishes to GitHubPages
every3Ominutes.AlongsidetheQuartzHTML,thepipelinegeneratesanenrichedwiki-search-
index.json searchindexonlongboardfella.com.au/wiki
isalwayscurrentwithoutanymanualwebsitedeployment.

load.Newarticlesappearinsearchautomaticallyassoonasthenext3O-minutepublishcyclec
ompletes.

DOMAINTAXONOMY(SELECTED)

 • ·Al&Agents·KnowledgeSystems·Tools,Platforms&Infrastructure
 • ·Science &Physics·Biology& Life Sciences·Health &Wellbeing
 • ·Society,Politics&Conflict·Economics&Finance·Law&Ethics
 • ·History&Anthropology·Philosophy,Ethics&Religion·Cosmology&Space
 • ·CreativePursuits·UX&Design·Entertainment&Games·Travels&Journeys
