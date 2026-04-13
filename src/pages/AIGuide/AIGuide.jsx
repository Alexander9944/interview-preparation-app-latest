import React from "react";

const aiTools = {
  Website: ["10WEB", "DURABLE", "FRAMER", "DIVI AI", "HOSTINGER", "WIX ADI", "dora.run/ai"],
  Automation: ["XEMBLY", "BARDEEN", "UIPATH", "BLUE PRISM", "MARKETO", "DRIP"],
  Prompts: ["FLOWGPT", "ALICENT AI", "PROMPTBOX", "AI DUNGEON", "PROMPTLY", "ARTBREEDER"],
  Research: ["CLAUDE", "CHATGPT", "PERPLUXITY", "BING CHAT", "CLEARSCOPE", "MARKETMUSE"],
  Video: [
    "KLAP", "OPUS", "EIGHTIFY", "INVIDEO", "HEYGEN", "RUNWAY",
    "sendspark", "ubique", "BHuman", "Hippo video", "Vidnoz", "Yepic",
    "Windsor", "Colossyan", "RepliQ", "Synthesia", "Descript", "Potion",
    "Reachout", "Tavus", "Gan", "Pipio", "Vidyard", "Vidu", "Nexweave",
    "Pageport", "Telesqope", "Hour One"
  ],
  Meeting: ["TLDV", "OTTER", "NOTY AI", "FIREFLIES", "AIRGRAM", "FATHOM"],
  Design: ["FLAIR AI", "Designify", "Clipdrop", "Autodraw", "Crello", "Snappa", "Magnific.ai"],
  Copywriting: [
    "RYTR", "COPY AI", "Writesonic", "Surferseo", "wordtune", "CC CRAYON", "Hoppy Copy", "Jasper AI",
    "Quillbot", "SuperEmail", "Thanos AI", "WriteCream", "Replix", "Twain", "Lavender",
    "WordAI", "Throxy", "Flowrite", "HarvyAI", "Typewise", "Hyper Write", "Compose AI",
    "Remark", "Flodo", "Type", "Craftly", "Ralph AI", "Selma"
  ],
  Startup: ["Tome", "webengage", "Namelix", "pitchgrade", "validator AI", "Airtable"],
  Productivity: ["Merlin", "Tinywow", "Notion AI", "Personal AI", "Asana", "Scalenut", "Taskade", "Coda", "Clickup", "Mem"],
  SMM: ["Hootsuite", "buffer", "agopapulse", "socialbee", "loomly", "zoho social"],
  SEO: ["VIDIQ", "SEONA AI", "BLOGSEO", "A SERPSTAT", "Wordlift", "Alli AI"],
  Presentation: ["Decktopus", "Slides AI", "Gamma AI", "Designs AI", "BeautifulAI", "Lumens"],
  Marketing: ["Trypencil", "Adcreative", "Adcopy", "Simplified", "SendBird", "Mailchimp"],
  Logo: ["looka", "logoAI", "BrandMark", "StockIMG AI", "Namecheap", "Logaster", "logodiffusion.com"],
  Chatbot: [
    "Droxy", "Chatbase", "Chatbot", "Chatsimple", "Dialogflow", "CChatFuel", "chatbotgen",
    "Airops", "Dante", "chatling"
  ],
  "AI Sales Coaching": [
    "Glencoco", "Justcall", "Second Nature", "Spiky", "Wonderway", "Trellus", "Attention",
    "Demodesk", "Observe AI", "Convin", "Voiceops", "Salesken", "Clari", "Allego", "Mindtickle",
    "Salesroom", "Demoleap", "Sellestial"
  ],
  "AI Personality Analysis": [
    "Humanlinker", "Humantic", "Crystal", "Hyperbound", "XiQ", "Dealintent",
    "Excel Formula bot", "Excely", "Rows", "SheetAI", "Chatcsv"
  ],
  "AI Data Provider": [
    "Clay", "Apollo AI", "BetterContact", "Ocean", "Zeliq", "Mattermark", "People Data",
    "Labs", "Tactic", "Noki", "Bizzy", "Leadshub AI", "RevenueBase", "Lantem", "Harmonic",
    "Seamless", "Blueprint", "Prospectoo", "Fiber", "Oppwiser", "Diffbot", "Scalelist",
    "Openlead", "Looti"
  ],
  "AI Advertising": [
    "Metadata", "Plai", "AdCreative", "Balloonary", "Madgicx", "Sortext", "Tomi", "DataAlly",
    "ElevenLabs", "Day", "Lunio", "PixelMe"
  ]
};

const AIGuide = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-32">
      <h1 className="text-3xl font-bold mb-6 text-center"> AI Tools by Category</h1>
      <div className="space-y-4">
        {Object.entries(aiTools).map(([category, tools], idx) => (
          <details key={idx} className="border border-gray-300 rounded-md">
            <summary className="bg-gray-100 cursor-pointer px-4 py-2 font-semibold text-lg">
              {category}
            </summary>
            <ul className="list-disc px-6 py-3 space-y-1">
              {tools.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
};

export default AIGuide;
