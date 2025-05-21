import fs from "fs";
import path from "path";

function walk(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, callback);
    else if (p.endsWith(".html")) callback(p);
  });
}

walk("./out", (file) => {
  let content = fs.readFileSync(file, "utf8");
  content = content.replace(/ – Nextra/g, "");
  fs.writeFileSync(file, content, "utf8");
  console.log("Patched:", file);
});
