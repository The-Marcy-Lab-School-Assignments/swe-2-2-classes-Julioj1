# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

With OOP in JavaScript, it's possible to use factory functions to achieve encapsulation and re-use them to make objects that look alike. However, factory functions have drawbacks and we often use classes instead.

How would you explain to a budding developer what the drawbacks of using factory functions are and why it is better to use classes instead?

## Response 1

### Factory Functions in JavaScript

A factory function is a function that **creates and returns objects:**

```js
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I'm ${name}`);
    }
  };
}
const person1 = createPerson('Alice', 25);
```

Factory functions are simple and flexible, and they **encapsulate data**. They’re great for small objects or quick object creation.

### Drawbacks of Factory Functions

* **Methods are recreated for every object**
Every time you call the factory function, new copies of methods (like ``greet``) are created in memory. This can be inefficient if you create many objects.

* **No inheritance / harder to share behavior**
If you want multiple object types to share methods, you’d have to manually assign them via prototypes or other workarounds. This can get messy compared to classes.

* **Less clear OOP structure**
Factory functions don’t naturally map to ``classes`` or ``types`` in your code, which can make it harder to reason about relationships between objects in large codebases.

### Why Classes Are Often Better
1. Methods are shared via prototypes
Methods defined in a class exist **once** on the prototype, so all instances share them. This is **more memory-efficient**.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);
console.log(person1.greet === person2.greet); // true
```

2. **Clear OOP semantics**
Classes provide a familiar structure that makes your code more readable, especially in larger projects.

### **Summary**
* ``Factory functions``: Great for simple objects, quick prototypes, or when you need encapsulation without worrying about inheritance.

* ``Drawbacks``: Methods are recreated for every instance, harder to share behavior, less clear OOP structure.

* ``Classes``: Better for larger codebases, memory-efficient method sharing, easier inheritance, clearer object-oriented design.
---

## Prompt 2

Explain what factors you should consider when deciding to make a property/method private? Provide an example to support your response.

## Response 2

###  Factors to Consider for Making a Property/Method Private

1. **Encapsulation / Protecting Internal State**
* If a property should not be changed directly from outside the object, * make it private.

* This prevents bugs caused by external code accidentally modifying internal data.

2. **Prevent Misuse / Maintain Invariants**

* If changing a property directly could break the logic or rules of your object, keep it private and expose controlled access via methods.

* Example: a bankAccount.balance shouldn’t be freely modified; it should only change via deposit() or withdraw().

3. **Simplify the Public Interface**

* Only expose what users of the class need. Internal helpers or utility methods that aren’t needed outside should be private.

4. **Ease of Refactoring**

* Private members can be changed internally without affecting code that uses the object, reducing the chance of breaking external code.

---

## Prompt 3

Explain what factors you should consider when deciding to make a property/method static? Provide an example to support your response.

## Response 3

Factors to Consider When Making a Property or Method ``static``.

A **static property or method** belongs to the **class itself**, not to individual objects created from that class.
You can call it using the class name directly, not through an instance.

You should consider making something ``static`` when:

1. **It doesn’t depend on instance data**

If the method or property doesn’t use ``this`` it’s a good candidate for being static.
Example: utility methods like formatting, conversions, or calculations.

2. **It represents shared data or behavior**

If all instances share the same value or logic, you can keep it static so it’s stored only once.

3. **You want a helper or factory function inside the class**

Sometimes you create static methods that help construct objects or perform general tasks related to the class.
---

## Prompt 4

The code below was generated by AI and contains a logical error.

```js
class Vault {
  #secrets = [];
  addSecret(newSecret) {
    this.#secrets.push(newSecret);
  }
  listSecrets() {
    return this.#secrets;
  }
}
```

Identify what the mistake is, explain why it is a problem, and suggest a way to fix it.

## Response 4

Private fields ``#secrets`` are supposed to hide and protect internal data **encapsulation**.

But by returning the actual array, you give external code indirect access.

Even though ``#secrets`` is private, it’s still vulnerable because the **reference to the same array** was shared.

To truly protect the data, you should return a **copy** of the array, not the original.

```js
class Vault {
  #secrets = [];

  addSecret(newSecret) {
    this.#secrets.push(newSecret);
  }

  listSecrets() {
    // Return a shallow copy to protect the private data
    return [...this.#secrets];
  }
}
```
Now, if someone modifies the returned array, it won’t affect the vault’s internal secrets.
