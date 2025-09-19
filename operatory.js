<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Operatory w JavaScript</title>
</head>
<body>
  <h1>Demo operatorów w JavaScript</h1>
  <p>Otwórz konsolę (F12 → zakładka „Console”), żeby zobaczyć wyniki.</p>

  <script>
    // ======================
    // Operatory w JavaScripcie
    // ======================

    console.log("=== 1. ARYTMETYCZNE ===");
    console.log(5 + 3);     // 8
    console.log(10 - 4);    // 6
    console.log(6 * 7);     // 42
    console.log(20 / 4);    // 5
    console.log(10 % 3);    // 1 (reszta)
    console.log(2 ** 3);    // 8 (potęgowanie)

    console.log("\\n=== 2. PRZYPISANIA ===");
    let a = 5;
    a += 3; // a = a + 3
    console.log(a); // 8
    a *= 2;
    console.log(a); // 16

    console.log("\\n=== 3. PORÓWNANIA ===");
    console.log(5 == "5");   // true (luźne)
    console.log(5 === "5");  // false (ścisłe)
    console.log(5 != "5");   // false
    console.log(5 !== "5");  // true
    console.log(7 > 3);      // true
    console.log(7 <= 7);     // true

    console.log("\\n=== 4. LOGICZNE ===");
    console.log(true && false);  // false
    console.log(true || false);  // true
    console.log(!true);          // false
    console.log(null || "domyślny"); // "domyślny"
    console.log("ok" && 0);         // 0

    console.log("\\n=== 5. NULLISH i OPTIONAL CHAINING ===");
    const ustawienia = { nazwa: "test" };
    console.log(ustawienia.port ?? 8080); // 8080 (bo port = undefined)
    console.log(ustawienia?.serwer?.ip);  // undefined (bez błędu)

    console.log("\\n=== 6. TERNARY ===");
    let wiek = 17;
    let status = wiek >= 18 ? "pełnoletni" : "niepełnoletni";
    console.log(status); // "niepełnoletni"

    console.log("\\n=== 7. BITOWE ===");
    console.log(5 & 3);   // 1 (AND binarnie)
    console.log(5 | 3);   // 7 (OR)
    console.log(5 ^ 3);   // 6 (XOR)
    console.log(~5);      // -6 (NOT)
    console.log(5 << 1);  // 10 (przesunięcie w lewo)

    console.log("\\n=== 8. UNARY ===");
    console.log(typeof 123);    // "number"
    console.log(+ "42");        // 42
    console.log(-"42");         // -42
    const obj = { x: 10 };
    delete obj.x;
    console.log(obj);           // {}

    console.log("\\n=== 9. INSTANCEOF i IN ===");
    console.log([] instanceof Array); // true
    console.log("x" in {x: 1});       // true

    console.log("\\n=== 10. SPREAD i REST ===");
    const arr1 = [1, 2];
    const arr2 = [...arr1, 3, 4];
    console.log(arr2); // [1, 2, 3, 4]

    function suma(...liczby) {
      return liczby.reduce((acc, n) => acc + n, 0);
    }
    console.log(suma(1, 2, 3, 4)); // 10

    console.log("\\n=== KONIEC DEMO ===");
  </script>
</body>
</html>
