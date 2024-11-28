// 😰 Using 'any' (unsafe)
let anyValue: any = 10;
anyValue.toLowerCase(); // Compiles but crashes! 💥

// 🛡️ Using 'unknown' (safe)
let unknownValue: unknown = 10;

// Type checking required! ✅
if (typeof unknownValue === "string") {
  unknownValue.toLowerCase(); // Safe!
}
