const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "gagana",
    alias: ["gagananews"],
    desc: "Get the latest news from Gagana.",
    category: "news",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const apiUrl = 'https://saviya-kolla-api.koyeb.app/news/gagana';
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) return reply("❌ *𝐹𝑎𝑖𝑙𝑒𝑑 𝑇𝑜 𝐹𝑒𝑡𝑐ℎ 𝐺𝑎𝑔𝑎𝑛𝑎 𝑁𝑒𝑤𝑠.*");

        const result = data.result;
        const newsInfo = `╭─── « 📰 ＧＡＧＡＮＡ ＮＥＷＳ 📰 » ───
│
│ ➢ ❝ ${result.title} ❞
│
│ 📅 *ᴅᴀᴛᴇ:* ${result.date}
│
│ 📃 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:*
│ ${result.desc}
│
│ 🔗 *ʟɪɴᴋ:* ${result.url}
│
╰───────────────⟡
> © 𝙱𝙻𝙰𝙲𝙺 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳 𝙽𝙴𝚆𝚂`;

        if (result.image) {
            await conn.sendMessage(from, { image: { url: result.image }, caption: newsInfo }, { quoted: mek });
        } else {
            await reply(newsInfo);
        }
    } catch (e) {
        reply("❌ *𝗘𝗿𝗿𝗼𝗿:* " + e.message);
    }
});


cmd({
    pattern: "derana",
    alias: ["adaderana", "derananews"],
    desc: "Get the latest news from Ada Derana.",
    category: "news",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const apiUrl = `https://api.srihub.store/news/derana?apikey=dew_HFHK1BMLQLKAKmm3QfE5oIKEWwFFIUwX4zwBeEDK`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) return reply("❌ *𝐹𝑎𝑖𝑙𝑒𝑑 𝑇𝑜 𝐹𝑒𝑡𝑐ℎ 𝐷𝑒𝑟𝑎𝑛𝑎 𝑁𝑒𝑤𝑠.*");

        const result = data.result;
        const newsInfo = `╭─── « 📰 ＡＤＡ ＤＥＲＡＮＡ 📰 » ───
│
│ ➢ ❝ ${result.title} ❞
│
│ 📅 *ᴅᴀᴛᴇ:* ${result.date}
│
│ 📃 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:*
│ ${result.desc}
│
│ 🔗 *ʟɪɴᴋ:* ${result.url}
│
╰───────────────⟡
> © 𝙱𝙻𝙰𝙲𝙺 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳 𝙽𝙴𝚆𝚂`;

        if (result.image) {
            await conn.sendMessage(from, { image: { url: result.image }, caption: newsInfo }, { quoted: mek });
        } else {
            await reply(newsInfo);
        }
    } catch (e) {
        reply("❌ *𝗘𝗿𝗿𝗼𝗿:* " + e.message);
    }
});


cmd({
    pattern: "lankadeepa",
    alias: ["deepa", "lankadeepanews"],
    desc: "Get the latest news from Lankadeepa.",
    category: "news",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const apiUrl = 'https://private-api-ebon.vercel.app/news/lankadeepa';
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) return reply("❌ *𝐹𝑎𝑖𝑙𝑒𝑑 𝑇𝑜 𝐹𝑒𝑡𝑐ℎ 𝐿𝑎𝑛𝑘𝑎𝑑𝑒𝑒𝑝𝑎 𝑁𝑒𝑤𝑠.*");

        const result = data.result;
        const newsInfo = `╭─── « 📰 ＬＡＮＫＡ ＤＥＥＰＡ 📰 » ───
│
│ ➢ ❝ ${result.title} ❞
│
│ 📅 *𝗗𝗮𝘁𝗲:* ${result.date}
│
│ 📃 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:*
│ ${result.desc}
│
│ 🔗 *ʟɪɴᴋ:* ${result.link}
│
╰───────────────⟡
> © 𝙱𝙻𝙰𝙲𝙺 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳 𝙽𝙴𝚆𝚂`;

        if (result.image) {
            await conn.sendMessage(from, { image: { url: result.image }, caption: newsInfo }, { quoted: mek });
        } else {
            await reply(newsInfo);
        }
    } catch (e) {
        reply("❌ *𝗘𝗿𝗿𝗼𝗿:* " + e.message);
    }
});


cmd({
    pattern: "sirasa",
    alias: ["sirasanews", "news1st"],
    desc: "Get the latest news from Sirasa News1st.",
    category: "news",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const apiUrl = 'https://private-api-ebon.vercel.app/news/sirasa';
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) return reply("❌ *𝗙𝗮𝗶𝗹𝗲𝗱 𝘁𝗼 𝗳𝗲𝘁𝗰𝗵 𝗦𝗶𝗿𝗮𝘀𝗮 𝗻𝗲𝘄𝘀.*");

        const result = data.result;

        // Clean HTML characters
        let desc = (result.desc || "")
            .replace(/&l;/g, '<').replace(/&g;/g, '>')
            .replace(/&quot;/g, '"').replace(/&amp;/g, '&')
            .replace(/&a;quot;/g, '"').replace(/&a;nbsp;/g, ' ')
            .replace(/<[^>]*>/g, '').replace(/\n\s*\n/g, '\n').trim();

        const newsInfo = `╭─── « 📰 ＳＩＲＡＳＡ ＮＥＷＳ 📰 » ───
│
│ ➢ ❝ ${result.title} ❞
│
│ 📅 *ᴅᴀᴛᴇ:* ${result.date ? result.date.split('T')[0] : 'Today'}
│
│ 📃 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:*
│ ${desc}
│
│ 🔗 *ʟɪɴᴋ:* ${result.link}
│
╰───────────────⟡
> © 𝙱𝙻𝙰𝙲𝙺 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳 𝙽𝙴𝚆𝚂`;

        if (result.image) {
            await conn.sendMessage(from, { image: { url: result.image }, caption: newsInfo }, { quoted: mek });
        } else {
            await reply(newsInfo);
        }
    } catch (e) {
        reply("❌ *𝗘𝗿𝗿𝗼𝗿:* " + e.message);
    }
});

cmd({
    pattern: "hiru",
    alias: ["hirunews"],
    desc: "Get the latest news from Hiru News.",
    category: "news",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const apiUrl = 'https://private-api-ebon.vercel.app/news/hiru';
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) return reply("❌ *𝗙𝗮𝗶𝗹𝗲𝗱 𝘁𝗼 𝗳𝗲𝘁𝗰𝗵 𝗛𝗶𝗿𝘂 𝗻𝗲𝘄𝘀.*");

        const result = data.result;
        const newsInfo = `╭─── « 📰 ＨＩＲＵ ＮＥＷＳ 📰 » ───
│
│ ➢ ❝ ${result.title} ❞
│
│ 📅 *ᴅᴀᴛᴇ:* ${result.date ? result.date.split(' ')[0] : 'Today'}
│
│ 📃 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:*
│ ${result.desc}
│
│ 🔗 *ʟɪɴᴋ:* ${result.link}
│
╰───────────────⟡
> © 𝙱𝙻𝙰𝙲𝙺 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳 𝙽𝙴𝚆𝚂`;

        if (result.image) {
            await conn.sendMessage(from, { image: { url: result.image }, caption: newsInfo }, { quoted: mek });
        } else {
            await reply(newsInfo);
        }
    } catch (e) {
        reply("❌ *𝗘𝗿𝗿𝗼𝗿:* " + e.message);
    }
});


cmd({
    pattern: "itn",
    alias: ["itnnews"],
    desc: "Get the latest news from ITN.",
    category: "news",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const apiUrl = 'https://private-api-ebon.vercel.app/news/itn';
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) return reply("❌ *𝗙𝗮𝗶𝗹𝗲𝗱 𝘁𝗼 𝗳𝗲𝘁𝗰𝗵 𝗜𝗧𝗡 𝗻𝗲𝘄𝘀.*");

        const result = data.result;
        const newsInfo = `╭─── « 📰 ＩＴＮ ＮＥＷＳ📰 » ───
│
│ ➢ ❝ ${result.title} ❞
│
│ 📅 *ᴅᴀᴛᴇ:* ${result.date}
│
│ 📃 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:*
│ ${result.desc}
│
│ 🔗 *ʟɪɴᴋ:* ${result.link}
│
╰───────────────⟡
> © 𝙱𝙻𝙰𝙲𝙺 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳 𝙽𝙴𝚆𝚂`;

        if (result.image) {
            await conn.sendMessage(from, { image: { url: result.image }, caption: newsInfo }, { quoted: mek });
        } else {
            await reply(newsInfo);
        }
    } catch (e) {
        reply("❌ *𝗘𝗿𝗿𝗼𝗿:* " + e.message);
    }
});
