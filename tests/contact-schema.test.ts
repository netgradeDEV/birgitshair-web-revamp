import assert from "node:assert/strict";
import { contactSchema } from "../src/lib/contact-schema";

type TestCase = {
  name: string;
  fn: () => void | Promise<void>;
};

const tests: TestCase[] = [];

function test(name: string, fn: () => void | Promise<void>) {
  tests.push({ name, fn });
}

test("accepts valid contact data", () => {
  const result = contactSchema.safeParse({
    name: "Birgit Beispiel",
    email: "birgit@example.com",
    phone: "+49 931 6606888",
    message: "Ich hätte gerne einen Termin nächste Woche.",
  });

  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.name, "Birgit Beispiel");
  }
});

test("rejects empty required fields", () => {
  const result = contactSchema.safeParse({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  assert.equal(result.success, false);
  if (!result.success) {
    const messages = result.error.issues.map((issue) => issue.message);
    assert(messages.includes("Name ist erforderlich"));
    assert(messages.includes("E-Mail ist erforderlich"));
    assert(messages.includes("Nachricht ist erforderlich"));
  }
});

test("rejects invalid characters in name", () => {
  const result = contactSchema.safeParse({
    name: "<script>",
    email: "kunde@example.com",
    phone: "", 
    message: "Test",
  });

  assert.equal(result.success, false);
  if (!result.success) {
    assert.equal(result.error.issues[0]?.message, "Name enthält ungültige Zeichen");
  }
});

test("rejects invalid phone characters", () => {
  const result = contactSchema.safeParse({
    name: "Max Mustermann",
    email: "max@example.com",
    phone: "0931*6606888",
    message: "Test",
  });

  assert.equal(result.success, false);
  if (!result.success) {
    assert.equal(result.error.issues[0]?.message, "Telefonnummer enthält ungültige Zeichen");
  }
});

test("allows optional phone field", () => {
  const result = contactSchema.safeParse({
    name: "Max Mustermann",
    email: "max@example.com",
    phone: "",
    message: "Test",
  });

  assert.equal(result.success, true);
});

export async function run() {
  const results = [] as Array<{ name: string; passed: boolean; error?: unknown }>;

  for (const { name, fn } of tests) {
    try {
      await fn();
      results.push({ name, passed: true });
    } catch (error) {
      results.push({ name, passed: false, error });
    }
  }

  return results;
}
