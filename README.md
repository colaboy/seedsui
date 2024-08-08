# Introduce

[seedsui-react](https://colaboy.github.io/seedsui-react/) UI framework Pages and Components code automation

## Extension Usage

### Menu

Create Page code or Component code

1. Right click folder or editor area
2. Choose "SeedsUI: ..."

### Command

Create Page code or Component code

```
Command + Shift + P
Input 'seeds'
Choose Components
```

Auto complete Component code

1. Input component name
2. Press "Tab" keyboard
   For instance: Input `<Calendar` then press "Tab" keyboard

# Develop

## Environment

Add vsce command to global

```bash
npm install -g yo generator-code
```

## Debug

```
F5 -> Choose Project -> Command+p
```

## Publish

First: execute command to package

```bash
npm run build
```

Second: upload the .vsix file to marketplace

[Marketplace](https://marketplace.visualstudio.com/manage)
