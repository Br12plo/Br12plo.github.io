function log(msg) {
  document.getElementById("wyniki").textContent += msg + "\n";
  console.log(msg); // dodatkowo w konsoli przeglądarki
}

log("=== 1. ARYTMETYCZNE ===");
log("5 + 3 = " + (5 + 3));
log("10 - 4 = " + (10 - 4));
log("6 * 7 = " + (6 * 7));
log("20 / 4 = " + (20 / 4));
log("10 % 3 = " + (10 % 3));
log("2 ** 3 = " + (2 ** 3));

log("\n=== 2. PRZYPISANIA ===");
let a = 5;
a += 3;
log("a po a+=3 = " + a);
a *= 2;
log("a po a*=2 = " + a);

log("\n=== 3. PORÓWNANIA ===");
log("5 == '5' → " + (5 == "5"));
log("5 === '5' → " + (5 === "5"));
log("7 > 3 → " + (7 > 3));
log("7 <= 7 → " + (7 <= 7));

log("\n=== 4. LOGICZNE ===");
log("true && false → " + (true && false));
log("true || false → " + (true || false));
log("!true → " + (!true));
log("null || 'domyślny' → " + (null || "domyślny"));
log("'ok' && 0 → " + ("ok" && 0));

log("\n=== 5. NULLISH i OPTIONAL CHAINING ===");
const ustawienia = { nazwa: "test" };
log("ustawienia.port ?? 8080 → " + (ustawienia.port ?? 8080));
log("ustawienia?.serwer?.ip → " + (ustawienia?.serwer?.ip));

log("\n=== 6. TERNARY ===");
let wiek = 17;
let status = wiek >= 18 ? "pełnoletni" : "niepełnoletni";
log("wiek = " + wiek + " → " + status);

log("\n=== 7. BITOWE ===");
log("5 & 3 = " + (5 & 3));
log("5 | 3 = " + (5 | 3));
log("5 ^ 3 = " + (5 ^ 3));
log("~5 = " + (~5));
log("5 << 1 = " + (5 << 1));

log("\n=== 8. UNARY ===");
log("typeof 123 → " + (typeof 123));
log("+ '42' → " + (+"42"));
log("- '42' → " + (-"42"));
const obj = { x: 10 };
delete obj.x;
log("delete obj.x → " + JSON.stringify(obj));

log("\n=== 9. INSTANCEOF i IN ===");
log("[] instanceof Array → " + ([] instanceof Array));
log("'x' in {x:1} → " + ("x" in {x: 1}));

log("\n=== 10. SPREAD i REST ===");
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
log("[...arr1, 3, 4] → " + arr2);

function suma(...liczby) {
  return liczby.reduce((acc, n) => acc + n, 0);
}
log("suma(1,2,3,4) → " + suma(1, 2, 3, 4));

log("\n=== KONIEC DEMO ===");

