const { cmd } = require("../arslan");
const { fakevCard } = require('../lib/fakevCard');


//================= LEAKVIDEO 1 =================

cmd({
    pattern: "leakvideo",
    desc: "Send random leak video",
    category: "Download",
    react: "🎬",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {

    try {

        await reply("⏳ 𝐹𝑒𝑡ℎ𝑖𝑛𝑔 𝐿𝑒𝑎𝑘 𝑉𝑖𝑑𝑒𝑜...");

        const videoUrl = "https://arslan-apis-v2.vercel.app/leakvideos";

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            mimetype: "video/mp4",
            caption: "🎬 Random Leak Video",
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: fakevCard });

    } catch (err) {

        console.log(err);
        reply("❌ 𝐶ℎ𝑒𝑘 𝐼𝑛𝑡𝑒𝑟𝑛𝑒𝑡.");

    }

});


//================= LEAKVIDEO 2 =================

cmd({
    pattern: "leakvideo2",
    desc: "Send random leak video 2",
    category: "Download",
    react: "🔥",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {

    try {

        await reply("⏳ 𝐹𝑒𝑡ℎ𝑖𝑛𝑔 𝐿𝑒𝑎𝑘 𝑉𝑖𝑑𝑒𝑜...");

        const videoUrl = "https://arslan-apis-v2.vercel.app/leakvideos2";

        await conn.sendMessage(from, {
            video: { url: videoUrl },
            mimetype: "video/mp4",
            caption: "🔥 Random Leak Video 2",
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: fakevCard });

    } catch (err) {

        console.log(err);
        reply("❌ 𝐶ℎ𝑒𝑘 𝐼𝑛𝑡𝑒𝑟𝑛𝑒𝑡.");

    }

});
