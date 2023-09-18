# I Don't Know TypeScript

## Type Assertions

* Using as keyword

```typescript
let code: any = 123; 
let employeeCode = code as number;
```

* Using bracket <> syntax

```typescript
let code: any = 123; 
let employeeCode = <number> code; 
```

* 