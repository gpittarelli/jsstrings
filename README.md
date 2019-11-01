# jsstrings

Like the UNIX `strings` utility, but for JS code. Specifically it
outputs all text in string literals in some given JS code.

Usage examples:

```
$ echo '"double quoted string"; const x = 1+1' | npx jsstrings
double quoted string
```

```
$ echo '"double quoted string"; const x = 1+1' > somefile.js ; npx jsstrings somefile.js
double quoted string
```

```
$ echo '"double quoted string"; const x = 1+1' > somefile.js ; npx jsstrings somefile.js somefile.js
double quoted string
double quoted string
```
