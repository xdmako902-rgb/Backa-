const { cmd } = require('../command');

cmd({
    pattern: "dina",
    alias: ["sirimath", "ud", "udnika"],
    desc: "Fun name responses",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, command, reply }) => {
    try {
        const cmdName = command.toLowerCase();

        if (cmdName === "dina") {
            return await reply('_ඔව් ඔව් ලස්සන දිනා බබා නේද ඒ 🥹🩷_');
        } 
        
        if (cmdName === "sirimath") {
            return await reply('_ඔව් ඔව් ලස්සන සිරිමත් බබා නේද 🥹🩷_');
        } 
        
        if (cmdName === "ud" || cmdName === "udnika") {
            return await reply('_අර ලස්සන උදනික බබා නේද 🥹🩷_');
        }

    } catch (e) {
        console.log(e);
    }
});
