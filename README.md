# 🔄 RxJS - Programação Reativa com ReactiveX

<div align="center">

![RxJS](https://img.shields.io/badge/RxJS-6.3.3-B7178C?logo=reactivex&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-14+-339933?logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Reactive](https://img.shields.io/badge/Programming-Reactive-purple)

**Exemplos práticos de Programação Reativa usando RxJS (ReactiveX para JavaScript)**

[O que é RxJS](#-o-que-é-rxjs) • [Exemplos](#-exemplos-do-projeto) • [Como Usar](#%EF%B8%8F-como-usar) • [Operadores](#-operadores-rxjs)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [O que é RxJS](#-o-que-é-rxjs)
- [O que é Programação Reativa](#-o-que-é-programação-reativa)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#%EF%B8%8F-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Exemplos do Projeto](#-exemplos-do-projeto)
- [Como Usar](#%EF%B8%8F-como-usar)
- [Operadores RxJS](#-operadores-rxjs)
- [Conceitos Fundamentais](#-conceitos-fundamentais)
- [Padrões de Uso](#-padrões-de-uso)
- [Marble Diagrams](#-marble-diagrams)
- [Boas Práticas](#-boas-práticas)
- [Comparação com Promises](#-comparação-com-promises)
- [Casos de Uso Reais](#-casos-de-uso-reais)
- [Troubleshooting](#-troubleshooting)
- [Recursos Adicionais](#-recursos-adicionais)
- [Sobre o Curso](#-sobre-o-curso)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Autor](#%E2%80%8D-autor)

---

## 📖 Sobre o Projeto

Este projeto é um conjunto de **exemplos práticos** de **Programação Reativa** usando **RxJS (ReactiveX para JavaScript)**. Desenvolvido como material didático do **Curso de RxJS da JWDev Treinamentos**, o projeto demonstra conceitos fundamentais e avançados de programação reativa através de aplicações interativas.

### 🎯 Objetivos

- 🔄 Demonstrar conceitos de Programação Reativa
- 📚 Ensinar operadores essenciais do RxJS
- 🎨 Criar exemplos interativos e visuais
- 💡 Mostrar casos de uso práticos e reais
- 🚀 Fornecer base para aplicações reativas
- 📖 Servir como material de referência

### 🌟 O que o Projeto Contém

O projeto inclui **4 exemplos práticos** que cobrem diferentes aspectos da programação reativa:

1. 🔍 **Auto Complete** - Busca de países com debounce
2. ⚙️ **Control Concurrence** - Controle de requisições concorrentes
3. 🖱️ **Drag and Drop** - Arrastar elementos com mouse
4. ⏹️ **Stop Request** - Cancelamento de requisições HTTP

---

## 🔄 O que é RxJS

### Descrição

**RxJS (Reactive Extensions for JavaScript)** é uma biblioteca para programação reativa usando **Observables**, facilitando a composição de código assíncrono e baseado em eventos. É uma implementação JavaScript do padrão **ReactiveX** (Reactive Extensions).

### Características Principais

- 🔄 **Observables** - Coleções de valores futuros ou eventos
- 🎯 **Operators** - Funções puras para transformar observables
- 📊 **Schedulers** - Controle de concorrência
- 🧩 **Composição** - Combine streams de forma declarativa
- ⚡ **Assíncrono** - Gerencia operações assíncronas elegantemente
- 🛠️ **Funcional** - Paradigma de programação funcional

### Por que Usar RxJS?

| Problema | Solução RxJS |
|----------|--------------|
| Callbacks aninhados (callback hell) | Composição com pipe() |
| Gerenciar múltiplas promises | Operators como merge, concat |
| Cancelar requisições | Operador takeUntil() |
| Debounce em inputs | Operador debounceTime() |
| Retry em falhas | Operador retry() |
| Transformar streams | Operadores map, filter, etc |

### ReactiveX (Rx)

**ReactiveX** é uma combinação de:
- 🎯 **Observer Pattern** - Observar mudanças
- 🔄 **Iterator Pattern** - Iterar sobre sequências
- 🧩 **Functional Programming** - Composição e transformação

**Disponível em várias linguagens:**
- JavaScript (RxJS)
- Java (RxJava)
- .NET (Rx.NET)
- Python (RxPY)
- Swift (RxSwift)
- Kotlin (RxKotlin)
- E muitas outras...

---

## 💡 O que é Programação Reativa

### Definição

**Programação Reativa** é um paradigma de programação orientado a **fluxos de dados** (data streams) e **propagação de mudanças**. Em vez de pensar em valores estáticos, você pensa em streams de eventos ao longo do tempo.

### Conceito Visual

```
Programação Imperativa (Tradicional):
────────────────────────────────────────
a = 2
b = 3
c = a + b    // c = 5
a = 10       // c ainda é 5 ❌


Programação Reativa:
────────────────────────────────────────
a$ = Stream(2, 10, 15...)
b$ = Stream(3, 5, 8...)
c$ = a$ + b$  // c$ atualiza automaticamente ✅

Timeline:
t0: a$=2,  b$=3  → c$=5
t1: a$=10, b$=3  → c$=13  (atualiza automaticamente!)
t2: a$=10, b$=8  → c$=18  (atualiza automaticamente!)
```

### Princípios Fundamentais

1. **Tudo é um Stream**
   - Eventos de mouse
   - Requisições HTTP
   - Input do usuário
   - WebSocket messages
   - Timer events

2. **Streams podem ser Observados**
   ```javascript
   stream$.subscribe(valor => console.log(valor));
   ```

3. **Streams podem ser Transformados**
   ```javascript
   stream$.pipe(
     map(x => x * 2),
     filter(x => x > 10)
   )
   ```

4. **Streams podem ser Combinados**
   ```javascript
   merge(stream1$, stream2$)
   ```

### Benefícios

- ✅ Código mais declarativo e legível
- ✅ Melhor gerenciamento de assincronicidade
- ✅ Composição elegante de operações
- ✅ Cancelamento de operações facilitado
- ✅ Tratamento de erros unificado
- ✅ Menos bugs relacionados a estado

---

## ✨ Funcionalidades

### Exemplos Implementados

#### 1. 🔍 Auto Complete (autoComplete.html)
- ✅ Busca reativa de países
- ✅ Debounce para evitar requisições excessivas
- ✅ Integração com API REST Countries
- ✅ Distinção de valores repetidos
- ✅ Tratamento de erros
- ✅ Validação de input mínimo (3 caracteres)

#### 2. ⚙️ Control Concurrence (controlConcurrence.html)
- ✅ Múltiplas requisições simultâneas
- ✅ Operadores mergeMap, concatMap, switchMap, exhaustMap
- ✅ Controle de concorrência (limitar requisições)
- ✅ Combinação de resultados
- ✅ API mock local (Node.js)

#### 3. 🖱️ Drag and Drop (dragNdrop.html)
- ✅ Arrastar elementos com mouse
- ✅ Eventos de mouse combinados
- ✅ Clonar elemento com tecla SPACE
- ✅ Cancelamento com mouseup
- ✅ Delay visual para suavidade

#### 4. ⏹️ Stop Request (stopRequest.html)
- ✅ Fazer requisições HTTP
- ✅ Cancelar requisições em andamento
- ✅ Race entre request e cancel
- ✅ Feedback visual de loading
- ✅ Alternância de botões

### Recursos RxJS Demonstrados

- 🎯 **Observables** - fromEvent, of, ajax
- 🔄 **Operators** - map, filter, switchMap, debounceTime
- 🧩 **Combination** - merge, concat, race
- ⚡ **Utility** - tap, delay, catchError
- 🎚️ **Filtering** - distinctUntilChanged, takeUntil
- 📊 **Transformation** - pluck, scan

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **[HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)** - Estrutura das páginas
  - Semântica moderna
  - Formulários interativos

- **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)** - Estilização
  - W3.CSS framework
  - Materialize CSS
  - Custom styles

- **[JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Lógica e interatividade
  - Arrow functions
  - Destructuring
  - Template literals

### Biblioteca Principal

- **[RxJS 6.3.3](https://rxjs.dev/)** - Programação Reativa
  - Observables
  - Operators
  - Schedulers
  - Subjects

### Backend (API Mock)

- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
  - HTTP server nativo
  - API REST simulada
  - Delay configurável

### APIs Externas

- **[REST Countries API](https://restcountries.eu/)** - API de países
  - Dados de países
  - Busca por nome
  - Sem necessidade de autenticação

### Frameworks CSS

- **[W3.CSS](https://www.w3schools.com/w3css/)** - Framework CSS simples
- **[Materialize CSS](https://materializecss.com/)** - Material Design

---

## 📋 Pré-requisitos

### Software Necessário

#### Para Executar os Exemplos HTML

- **Navegador Web Moderno**
  - Google Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+

#### Para Executar a API Mock

- **[Node.js 14+](https://nodejs.org/)** - Runtime JavaScript
  - npm (incluído com Node.js)

### Opcional

- **Editor de Código:** VS Code, Sublime, Atom
- **Extensões VS Code:**
  - Live Server
  - RxJS snippets
  - JavaScript (ES6) code snippets

### Verificar Instalações

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Saída esperada
# v14.x.x ou superior
# 6.x.x ou superior
```

---

## 🚀 Instalação

### 1. Obter o Projeto

```bash
# Clonar repositório
git clone <url-do-repositorio>
cd jwdev-rxjs-master

# Ou extrair ZIP
unzip jwdev-rxjs-master.zip
cd jwdev-rxjs-master
```

### 2. Estrutura do Projeto

```
jwdev-rxjs-master/
│
├── api.js                      # Servidor Node.js (API mock)
├── autoComplete.html           # Exemplo 1: Busca com autocomplete
├── controlConcurrence.html     # Exemplo 2: Controle de concorrência
├── dragNdrop.html              # Exemplo 3: Drag and drop
├── stopRequest.html            # Exemplo 4: Cancelar requisições
├── images/
│   └── maxresdefault.jpg       # Imagem de referência
└── README.md                   # Documentação
```

### 3. Instalar Dependências

**Não há dependências npm** - O projeto usa RxJS via CDN:

```html
<script src="https://unpkg.com/@reactivex/rxjs@6.3.3/dist/global/rxjs.umd.js"></script>
```

### 4. Iniciar API Mock (Para alguns exemplos)

```bash
# Iniciar servidor Node.js na porta 5200
node api.js
```

**Console deve mostrar:**
```
Servidor rodando em http://localhost:5200
```

---

## ▶️ Como Usar

### Método 1: Abrir Diretamente no Navegador

```bash
# Exemplos que não precisam de API:
# - dragNdrop.html

# Simplesmente abra o arquivo HTML no navegador
# Windows
start dragNdrop.html

# Linux
xdg-open dragNdrop.html

# macOS
open dragNdrop.html
```

### Método 2: Usar Live Server (VS Code)

```bash
# 1. Instalar extensão Live Server no VS Code
# 2. Abrir projeto no VS Code
code .

# 3. Clicar com botão direito no arquivo HTML
# 4. Selecionar "Open with Live Server"
```

### Método 3: Servidor HTTP Simples

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000

# Acessar no navegador
http://localhost:8000/autoComplete.html
```

### Passo a Passo por Exemplo

#### Exemplo 1: Auto Complete

```bash
# Não precisa de API local
# 1. Abrir autoComplete.html no navegador
# 2. Digitar nome de país (mínimo 3 caracteres)
# 3. Aguardar 300ms (debounce)
# 4. Ver resultados aparecerem
```

#### Exemplo 2: Control Concurrence

```bash
# Precisa da API mock
# 1. Terminal 1: Iniciar API
node api.js

# 2. Terminal 2 ou navegador: Abrir HTML
# Abrir controlConcurrence.html
# 3. Abrir Console do navegador (F12)
# 4. Ver logs das requisições
```

#### Exemplo 3: Drag and Drop

```bash
# Não precisa de API
# 1. Abrir dragNdrop.html
# 2. Clicar e arrastar o quadrado cinza
# 3. Pressionar SPACE para clonar
# 4. Soltar mouse para parar arrasto
```

#### Exemplo 4: Stop Request

```bash
# Precisa da API mock
# 1. Terminal: Iniciar API
node api.js

# 2. Abrir stopRequest.html
# 3. Clicar em "Fazer Request"
# 4. Clicar em "Parar Request" (antes de 2s)
# 5. Ver mensagem de cancelamento
```

---

## 📚 Exemplos do Projeto

### 1. 🔍 Auto Complete - Busca Reativa de Países

<div align="center">

**Demonstra:** debounceTime, distinctUntilChanged, switchMap, catchError

</div>

#### Funcionalidade

- Busca países em tempo real enquanto digita
- Debounce de 300ms para evitar requisições excessivas
- Valida input mínimo de 3 caracteres
- Ignora valores repetidos consecutivos
- Cancela requisições anteriores automaticamente
- Tratamento de erros gracioso

#### Código Principal

```javascript
const input = fromEvent(document.querySelector("input"), 'input');

input.pipe(
    debounceTime(300),                    // Aguarda 300ms após parar de digitar
    pluck('target', 'value'),              // Extrai o valor do input
    map(e => e.trim()),                    // Remove espaços
    distinctUntilChanged(),                // Ignora valores iguais consecutivos
    switchMap(term => {
        if (!term || term.length < 3) return of([]);
        return getCountriesApi(term);      // Busca na API
    }),
    catchError((err, source) => {
        console.error(err);
        return source.pipe(startWith([]));
    })
).subscribe(resultView);
```

#### Operadores Usados

| Operador | Função |
|----------|--------|
| `fromEvent` | Cria Observable de eventos DOM |
| `debounceTime` | Aguarda N ms após última emissão |
| `pluck` | Extrai propriedade de objeto |
| `map` | Transforma cada valor |
| `distinctUntilChanged` | Remove duplicatas consecutivas |
| `switchMap` | Cancela Observable anterior, usa novo |
| `catchError` | Trata erros sem quebrar stream |

#### Fluxo Visual

```
Usuário digita:  B → Br → Bra → Braz → Brazi → Brazil
                 ↓    ↓    ↓     ↓      ↓       ↓
debounceTime:    X    X    X     X      X       ✓ (300ms depois)
                                                 ↓
distinctUntil:                                   ✓ (é diferente)
                                                 ↓
switchMap:                                   [API Request]
                                                 ↓
Resultado:                                   [Brazil, ...]
```

---

### 2. ⚙️ Control Concurrence - Controle de Requisições

<div align="center">

**Demonstra:** mergeMap, concatMap, switchMap, exhaustMap, combineAll

</div>

#### Funcionalidade

Compara diferentes estratégias de executar múltiplas requisições HTTP:

- **mergeMap** - Todas em paralelo (concorrente)
- **concatMap** - Uma após a outra (serial)
- **switchMap** - Cancela anteriores, executa nova
- **exhaustMap** - Executa primeira, ignora próximas
- **Limite de concorrência** - Ex: máximo 4 simultâneas

#### Código Principal

```javascript
const api = (response, delay) =>
  ajax({
    url: `http://localhost:5200/response/${JSON.stringify(response)}/delay/${delay}/`
  });

const a = api({ data: "A" }, 1000);
const b = api({ data: "B" }, 1000);
const c = api({ data: "C" }, 800);
// ... etc

of(a, b, c, d, e, f, g, h).pipe(
    // Escolher operador:
    mergeMap(e => e, 4),          // Máximo 4 simultâneas
    // concatMap(e => e),          // Uma por vez
    // switchMap(e => e),          // Cancela anteriores
    // exhaustMap(e => e),         // Ignora novas
    pluck('response', 'data'),
    combineAll()                   // Combina todos resultados
).subscribe(
    x => console.log(x),
    err => console.log(err),
    _ => console.log("Complete")
);
```

#### Comparação de Operadores

**mergeMap (Paralelo):**
```
A ──────────────────→ (1000ms)
B ──────────────────→ (1000ms)
C ──────────→ (800ms)
D ────────────────────────→ (1800ms)

Timeline: C, A, B, D (ordem de conclusão)
```

**concatMap (Serial):**
```
A ──────────────────→ (1000ms)
                    B ──────────────────→ (1000ms)
                                        C ──────────→ (800ms)
                                                    D ────────→

Timeline: A, B, C, D (ordem de início)
```

**switchMap (Cancela Anteriores):**
```
A ──────────X (cancelada)
B ──────────X (cancelada)
C ──────────X (cancelada)
H ──────────→ (apenas H completa)

Timeline: H (apenas a última)
```

**exhaustMap (Ignora Novas):**
```
A ──────────────────→ (1000ms, completa)
B X (ignorada)
C X (ignorada)
H X (ignorada)

Timeline: A (apenas a primeira)
```

---

### 3. 🖱️ Drag and Drop - Arrastar Elementos

<div align="center">

**Demonstra:** fromEvent, switchMap, takeUntil, merge, filter, tap

</div>

#### Funcionalidade

- Arrastar elemento div com mouse
- Calcular posição em tempo real
- Parar arrasto ao soltar mouse (mouseup)
- Clonar elemento ao pressionar SPACE
- Delay visual para suavizar movimento

#### Código Principal

```javascript
const mouseDown$ = fromEvent(card, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const mouseMove$ = fromEvent(document, 'mousemove');
const keyUp$ = fromEvent(document, 'keyup');

const dragAndDrop$ = mouseDown$.pipe(
    map(e => ({
        x: e.clientX,
        y: e.clientY,
        target: {
            x: e.target.offsetLeft,
            y: e.target.offsetTop,
        }
    })),
    switchMap(start => merge(
        mouseMove$.pipe(
            map(e => ({
                x: e.clientX - start.x + start.target.x,
                y: e.clientY - start.y + start.target.y,
            })),
            takeUntil(mouseUp$)
        ),
        keyUp$.pipe(
            filter(e => e.which === 32),  // Tecla SPACE
            tap(() => {
                document.body.insertBefore(card.cloneNode(true), card);
            }),
            skip()
        )
    ))
);

dragAndDrop$.pipe(
    delay(250)  // Suaviza movimento
).subscribe(val => {
    card.style.top = `${val.y}px`;
    card.style.left = `${val.x}px`;
});
```

#### Fluxo de Eventos

```
1. mousedown (clicar)
   ↓
2. Captura posição inicial
   ↓
3. switchMap → merge de:
   ├─→ mouseMove (arrastar)
   │   └─→ Calcula nova posição
   │       └─→ takeUntil(mouseUp)  // Para ao soltar
   │
   └─→ keyUp (tecla SPACE)
       └─→ Clona elemento
       
4. delay(250ms)
   ↓
5. Atualiza posição CSS
```

---

### 4. ⏹️ Stop Request - Cancelar Requisições

<div align="center">

**Demonstra:** race, switchMap, tap, ajax

</div>

#### Funcionalidade

- Fazer requisição HTTP com delay de 2 segundos
- Mostrar loading durante requisição
- Permitir cancelamento antes de completar
- Race condition entre request e cancel
- Alternar botões dinamicamente

#### Código Principal

```javascript
const buttomRequest$ = fromEvent(buttomElementRequest, 'click');
const buttomStopRequest$ = fromEvent(buttomElementStopRequest, 'click');

const request = api({ data: 'Resposta da API!' }, 2000).pipe(
    pluck('response', 'data'),
    tap(setContent),
);

const stopRequest = buttomStopRequest$.pipe(
    tap(() => setContent("Requisição Cancelada!..."))
);

buttomRequest$.pipe(
    tap(() => {
        requesting(true);              // Mostrar botão "Parar"
        content.innerHTML = 'Carregando...';
    }),
    switchMap(() => race(request, stopRequest)),  // Primeiro que emitir vence
    tap(() => requesting(false))       // Voltar ao estado inicial
).subscribe();
```

#### Race Condition Visual

```
Click "Fazer Request"
    ↓
[────────── Request (2000ms) ──────────]
    ↓                  ↓
    |                  └─→ Se completar: "Resposta da API!"
    |
    └─→ Click "Parar" durante delay
        └─→ stopRequest vence: "Requisição Cancelada!"
```

---

## 🎯 Operadores RxJS

### Operadores de Criação

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `fromEvent` | Cria Observable de eventos DOM | `fromEvent(button, 'click')` |
| `of` | Cria Observable de valores | `of(1, 2, 3)` |
| `from` | Cria de array, promise, iterable | `from([1, 2, 3])` |
| `interval` | Emite números sequencialmente | `interval(1000)` |
| `timer` | Emite após delay | `timer(3000)` |
| `ajax` | Faz requisição HTTP | `ajax('url')` |

### Operadores de Transformação

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `map` | Transforma cada valor | `map(x => x * 2)` |
| `pluck` | Extrai propriedade | `pluck('response', 'data')` |
| `scan` | Acumula valores | `scan((acc, x) => acc + x)` |
| `mergeMap` | Mapeia e achata (paralelo) | `mergeMap(x => ajax(x))` |
| `concatMap` | Mapeia e achata (serial) | `concatMap(x => ajax(x))` |
| `switchMap` | Cancela anterior, mapeia novo | `switchMap(x => ajax(x))` |
| `exhaustMap` | Ignora novos enquanto processa | `exhaustMap(x => ajax(x))` |

### Operadores de Filtragem

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `filter` | Filtra valores | `filter(x => x > 10)` |
| `take` | Pega N primeiros valores | `take(5)` |
| `takeUntil` | Pega até outro Observable emitir | `takeUntil(clicks$)` |
| `skip` | Pula N primeiros valores | `skip(3)` |
| `distinctUntilChanged` | Remove duplicatas consecutivas | `distinctUntilChanged()` |
| `debounceTime` | Aguarda N ms de silêncio | `debounceTime(300)` |
| `throttleTime` | Emite no máximo 1 por N ms | `throttleTime(1000)` |

### Operadores de Combinação

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `merge` | Combina múltiplos observables | `merge(obs1$, obs2$)` |
| `concat` | Concatena sequencialmente | `concat(obs1$, obs2$)` |
| `race` | Primeiro que emitir vence | `race(obs1$, obs2$)` |
| `combineLatest` | Combina últimos valores | `combineLatest([a$, b$])` |
| `withLatestFrom` | Combina com último de outro | `a$.pipe(withLatestFrom(b$))` |
| `zip` | Combina valores por índice | `zip(a$, b$)` |

### Operadores de Utilidade

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `tap` | Executa side-effect | `tap(x => console.log(x))` |
| `delay` | Atrasa emissões | `delay(1000)` |
| `catchError` | Trata erros | `catchError(err => of([]))` |
| `retry` | Reexecuta em erro | `retry(3)` |
| `finalize` | Executa ao finalizar | `finalize(() => cleanup())` |

---

## 🧠 Conceitos Fundamentais

### Observable

**Observable** é uma coleção de valores futuros ou eventos.

```javascript
// Criar Observable
const observable$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

// Observar (Subscribe)
observable$.subscribe({
    next: x => console.log('Valor:', x),
    error: err => console.error('Erro:', err),
    complete: () => console.log('Completo!')
});
```

### Observer

**Observer** é um consumidor de valores emitidos por um Observable.

```javascript
const observer = {
    next: x => console.log('Recebido:', x),
    error: err => console.error('Erro:', err),
    complete: () => console.log('Stream finalizado')
};

observable$.subscribe(observer);
```

### Subscription

**Subscription** representa a execução de um Observable.

```javascript
const subscription = observable$.subscribe(x => console.log(x));

// Cancelar subscription (unsubscribe)
subscription.unsubscribe();
```

### Operators

**Operators** são funções puras que retornam novos Observables.

```javascript
// Sem operators
observable$.subscribe(x => console.log(x * 2));

// Com operators (melhor)
observable$.pipe(
    map(x => x * 2)
).subscribe(x => console.log(x));
```

### Pipe

**pipe()** encadeia múltiplos operators.

```javascript
observable$.pipe(
    filter(x => x > 10),
    map(x => x * 2),
    take(5)
).subscribe(x => console.log(x));
```

---

## 🎨 Marble Diagrams

Marble Diagrams são representações visuais de Observables ao longo do tempo.

### Legenda

```
─────────  Timeline (tempo)
──1──2──  Valores emitidos
───X──    Erro
───|      Complete
```

### Exemplo: map

```javascript
source$.pipe(map(x => x * 2))
```

```
Input:   ──1──2──3──4──|
            ↓  ↓  ↓  ↓
         map(x => x * 2)
            ↓  ↓  ↓  ↓
Output:  ──2──4──6──8──|
```

### Exemplo: filter

```javascript
source$.pipe(filter(x => x % 2 === 0))
```

```
Input:   ──1──2──3──4──5──|
            ✗  ✓  ✗  ✓  ✗
Output:  ─────2─────4─────|
```

### Exemplo: debounceTime

```javascript
source$.pipe(debounceTime(300))
```

```
Input:   ──a──b─c───d────e──|
          300ms silêncio ↓
Output:  ───────c────────e──|
```

### Exemplo: switchMap

```javascript
source$.pipe(switchMap(x => ajax(x)))
```

```
Input:    ──a──────b──────c──|
           │        │        │
Requests: │        │        │
          └─req_a──X        │
                   └─req_b─X│
                            └─req_c──→ completa
Output:   ────────────────────res_c──|
```

### Exemplo: merge

```javascript
merge(source1$, source2$)
```

```
Source1:  ──1────3────5──|
Source2:  ────2────4────6──|
           ↓  ↓  ↓  ↓  ↓  ↓
Merged:   ──1─2──3─4──5─6──|
```

### Exemplo: concat

```javascript
concat(source1$, source2$)
```

```
Source1:  ──1──2──3──|
Source2:  ──4──5──6──|

Concat:   ──1──2──3────4──5──6──|
          └─source1─┘└─source2─┘
```

---

## 🎓 Padrões de Uso

### 1. Busca com Debounce

**Problema:** Fazer busca a cada tecla é custoso

**Solução RxJS:**
```javascript
fromEvent(searchInput, 'input').pipe(
    debounceTime(300),              // Aguarda 300ms
    pluck('target', 'value'),
    distinctUntilChanged(),         // Evita buscar mesmo termo
    switchMap(term => searchAPI(term))
).subscribe(results => displayResults(results));
```

### 2. Cancelar Requisições

**Problema:** Requisições antigas completam depois das novas

**Solução RxJS:**
```javascript
fromEvent(searchButton, 'click').pipe(
    switchMap(() => api.search(query))  // Cancela requests anteriores
).subscribe(results => show(results));
```

### 3. Polling (Requisições Periódicas)

**Problema:** Atualizar dados periodicamente

**Solução RxJS:**
```javascript
interval(5000).pipe(
    switchMap(() => api.getData())
).subscribe(data => updateView(data));
```

### 4. Retry em Falhas

**Problema:** Requisição falha temporariamente

**Solução RxJS:**
```javascript
ajax('https://api.com/data').pipe(
    retry(3),                    // Retentar 3 vezes
    catchError(err => of([]))    // Valor padrão em erro
).subscribe(data => console.log(data));
```

### 5. Combinar Múltiplos Inputs

**Problema:** Validar formulário com múltiplos campos

**Solução RxJS:**
```javascript
const email$ = fromEvent(emailInput, 'input');
const password$ = fromEvent(passwordInput, 'input');

combineLatest([email$, password$]).pipe(
    map(([email, password]) => ({
        email: email.target.value,
        password: password.target.value
    })),
    map(form => isValid(form))
).subscribe(valid => submitButton.disabled = !valid);
```

---

## 📖 API Mock (api.js)

### Servidor Node.js

O arquivo `api.js` cria um servidor HTTP simples para simular requisições com delay:

```javascript
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',  // CORS habilitado
    });

    // Formato: /response/{JSON}/delay/{ms}/
    const matchURL = /^\/response\/(.+)\/delay\/(\d+)\/?$/;

    if (!matchURL.test(req.url)) return res.end();

    const [, response, delay] = matchURL.exec(req.url);
    const jsonResponse = decodeURIComponent(response);

    setTimeout(() => {
        res.write(jsonResponse);
        res.end();
    }, +delay);

}).listen(5200);
```

### Como Funciona

#### URL Format
```
http://localhost:5200/response/{JSON}/delay/{MS}/
```

#### Exemplo de Uso

```javascript
// Request que retorna após 1000ms
ajax('http://localhost:5200/response/{"data":"Hello"}/delay/1000/')

// Response após 1 segundo:
{ data: "Hello" }
```

#### Executar API

```bash
# Terminal 1: Iniciar servidor
node api.js

# Terminal 2: Testar com curl
curl "http://localhost:5200/response/{\"status\":\"ok\"}/delay/1000/"

# Aguarda 1 segundo, retorna:
{"status":"ok"}
```

---

## 🔥 Comparação com Promises

### Promises vs Observables

| Aspecto | Promise | Observable |
|---------|---------|------------|
| **Valores** | 1 único valor | 0, 1 ou múltiplos valores |
| **Lazy** | Não (executa imediatamente) | Sim (só executa ao subscribe) |
| **Cancelável** | Não | Sim (unsubscribe) |
| **Operators** | Limitado (then, catch) | 100+ operators |
| **Retry** | Manual | Built-in (retry operator) |
| **Multicast** | Não | Sim (subjects) |

### Exemplo Comparativo

#### Com Promises ❌

```javascript
// Problema: Não pode cancelar
let controller;

searchInput.addEventListener('input', async (e) => {
    // Como cancelar requisição anterior? Difícil!
    const results = await fetch(`/api/search?q=${e.target.value}`);
    displayResults(results);
});
```

#### Com RxJS ✅

```javascript
// Fácil cancelamento com switchMap
fromEvent(searchInput, 'input').pipe(
    debounceTime(300),
    pluck('target', 'value'),
    switchMap(query => ajax(`/api/search?q=${query}`))  // Cancela automático
).subscribe(results => displayResults(results));
```

---

## 🚀 Casos de Uso Reais

### 1. Auto-complete / Typeahead 🔍

**Usado em:** Google Search, GitHub Search, Dropdown de busca

```javascript
searchInput$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => searchAPI(term)),
    catchError(() => of([]))
).subscribe(results => showSuggestions(results));
```

### 2. Infinite Scroll 📜

**Usado em:** Twitter, Instagram, Facebook feed

```javascript
fromEvent(window, 'scroll').pipe(
    throttleTime(200),
    filter(() => isNearBottom()),
    switchMap(() => loadMorePosts()),
    scan((acc, posts) => [...acc, ...posts], [])
).subscribe(allPosts => render(allPosts));
```

### 3. Drag and Drop 🖱️

**Usado em:** Trello, Jira, Kanban boards

```javascript
mousedown$.pipe(
    switchMap(start => mousemove$.pipe(
        map(move => calculatePosition(start, move)),
        takeUntil(mouseup$)
    ))
).subscribe(pos => updatePosition(pos));
```

### 4. WebSocket Real-time 📡

**Usado em:** Chat applications, Stock tickers

```javascript
const socket$ = webSocket('ws://localhost:8080');

socket$.pipe(
    retry({ delay: 3000 }),          // Reconecta em 3s
    catchError(() => of({ error: true }))
).subscribe(message => handleMessage(message));
```

### 5. Formulário Reativo 📝

**Usado em:** Validação de formulários complexos

```javascript
combineLatest({
    email: email$.pipe(startWith('')),
    password: password$.pipe(startWith('')),
    terms: terms$.pipe(startWith(false))
}).pipe(
    map(form => validateForm(form)),
    distinctUntilChanged()
).subscribe(isValid => submitBtn.disabled = !isValid);
```

### 6. Polling com Controle ⏱️

**Usado em:** Dashboards, status monitoring

```javascript
const startPolling$ = fromEvent(startBtn, 'click');
const stopPolling$ = fromEvent(stopBtn, 'click');

startPolling$.pipe(
    switchMap(() => interval(5000).pipe(
        switchMap(() => fetchData()),
        takeUntil(stopPolling$)
    ))
).subscribe(data => updateDashboard(data));
```

---

## 💻 Exemplos de Código Completos

### Exemplo 1: Contador Reativo

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/@reactivex/rxjs@6.3.3/dist/global/rxjs.umd.js"></script>
</head>
<body>
    <button id="increment">+</button>
    <button id="decrement">-</button>
    <button id="reset">Reset</button>
    <div>Contador: <span id="count">0</span></div>

    <script>
        const { fromEvent, merge } = rxjs;
        const { map, scan, startWith } = rxjs.operators;

        const increment$ = fromEvent(document.getElementById('increment'), 'click')
            .pipe(map(() => 1));
        
        const decrement$ = fromEvent(document.getElementById('decrement'), 'click')
            .pipe(map(() => -1));
        
        const reset$ = fromEvent(document.getElementById('reset'), 'click')
            .pipe(map(() => 0));

        merge(increment$, decrement$, reset$).pipe(
            startWith(0),
            scan((count, value) => {
                return value === 0 ? 0 : count + value;
            }, 0)
        ).subscribe(count => {
            document.getElementById('count').textContent = count;
        });
    </script>
</body>
</html>
```

### Exemplo 2: Timer com Controles

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/@reactivex/rxjs@6.3.3/dist/global/rxjs.umd.js"></script>
</head>
<body>
    <button id="start">Start</button>
    <button id="pause">Pause</button>
    <button id="reset">Reset</button>
    <div>Tempo: <span id="time">0</span>s</div>

    <script>
        const { fromEvent, interval } = rxjs;
        const { switchMap, map, scan, takeUntil, startWith } = rxjs.operators;

        const start$ = fromEvent(document.getElementById('start'), 'click');
        const pause$ = fromEvent(document.getElementById('pause'), 'click');
        const reset$ = fromEvent(document.getElementById('reset'), 'click');

        const timer$ = start$.pipe(
            switchMap(() => interval(1000).pipe(
                takeUntil(pause$),
                takeUntil(reset$)
            )),
            scan((acc) => acc + 1, 0),
            startWith(0)
        );

        reset$.subscribe(() => {
            document.getElementById('time').textContent = '0';
        });

        timer$.subscribe(time => {
            document.getElementById('time').textContent = time;
        });
    </script>
</body>
</html>
```

### Exemplo 3: Chat em Tempo Real

```javascript
const { webSocket } = rxjs.webSocket;
const { retry, catchError } = rxjs.operators;

const socket$ = webSocket({
    url: 'ws://localhost:8080',
    openObserver: {
        next: () => console.log('Conectado!')
    },
    closeObserver: {
        next: () => console.log('Desconectado!')
    }
});

// Receber mensagens
socket$.pipe(
    retry({ delay: 3000 }),  // Reconectar em 3s
    catchError(err => {
        console.error('Erro:', err);
        return EMPTY;
    })
).subscribe(message => displayMessage(message));

// Enviar mensagem
function sendMessage(text) {
    socket$.next({ text, user: currentUser });
}
```

---

## 🎯 Boas Práticas

### 1. Usar Convenção $ para Observables

```javascript
// ✅ Bom - Fácil identificar observables
const clicks$ = fromEvent(button, 'click');
const users$ = ajax('/api/users');

// ❌ Evitar - Confuso
const clicks = fromEvent(button, 'click');
const users = ajax('/api/users');
```

### 2. Sempre Unsubscribe

```javascript
// ✅ Bom - Previne memory leaks
const subscription = observable$.subscribe(x => console.log(x));

// Quando não precisar mais
subscription.unsubscribe();

// Ou usar takeUntil
observable$.pipe(
    takeUntil(destroy$)
).subscribe(x => console.log(x));
```

### 3. Tratar Erros

```javascript
// ✅ Bom - Trata erros sem quebrar stream
observable$.pipe(
    catchError(err => {
        console.error(err);
        return of(defaultValue);  // Valor padrão
    })
).subscribe(x => console.log(x));

// ❌ Evitar - Stream quebra em erro
observable$.subscribe(
    x => console.log(x)
    // Sem error handler
);
```

### 4. Evitar Nested Subscriptions

```javascript
// ❌ Evitar - Nested subscriptions (callback hell)
observable1$.subscribe(x => {
    observable2$.subscribe(y => {
        observable3$.subscribe(z => {
            // ...
        });
    });
});

// ✅ Bom - Usar operators para aplanar
observable1$.pipe(
    switchMap(x => observable2$),
    switchMap(y => observable3$)
).subscribe(z => console.log(z));
```

### 5. Usar Operadores Apropriados

```javascript
// Para requisições HTTP (cancela anteriores)
switchMap(query => ajax(query))

// Para salvar dados (aguarda anterior)
concatMap(data => saveAPI(data))

// Para logging (não interfere)
tap(x => console.log(x))

// Para contadores (acumula)
scan((acc, x) => acc + x)
```

---

## 🔧 Troubleshooting

### Erro: Cannot find module 'http'

**Problema:** Tentando executar api.js no navegador

**Solução:**
```bash
# api.js é um servidor Node.js, execute no terminal:
node api.js

# NÃO abra api.js no navegador
```

### Erro: CORS blocked

**Problema:** API externa bloqueia requisição

**Solução:**
- Use a API mock local (api.js)
- Ou use um proxy CORS
- Em produção, configure CORS no backend

```javascript
// api.js já tem CORS habilitado:
'Access-Control-Allow-Origin': '*'
```

### Observable não emite valores

**Problema:** Observable criado mas não faz nada

**Solução:**
```javascript
// ❌ Observable não executado
const observable$ = fromEvent(button, 'click').pipe(
    map(x => x * 2)
);
// Nada acontece!

// ✅ Precisa fazer subscribe
observable$.subscribe(x => console.log(x));
```

### Memory Leak

**Problema:** Muitas subscriptions ativas

**Solução:**
```javascript
// ✅ Guardar subscription e limpar
const subscription = observable$.subscribe();

// Ao destruir componente
subscription.unsubscribe();

// Ou usar takeUntil
observable$.pipe(
    takeUntil(componentDestroy$)
).subscribe();
```

### REST Countries API Deprecated

**Problema:** API antiga não funciona mais

**Solução:**
```javascript
// ❌ API antiga (deprecated)
ajax('https://restcountries.eu/rest/v2/name/${term}')

// ✅ API nova (v3)
ajax('https://restcountries.com/v3.1/name/${term}')
```

---

## 🎨 Frameworks que Usam RxJS

### Angular

RxJS é parte fundamental do Angular:

```typescript
// HttpClient retorna Observables
this.http.get('/api/users').pipe(
    map(users => users.filter(u => u.active)),
    catchError(err => of([]))
).subscribe(users => this.users = users);

// Reactive Forms
this.form.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged()
).subscribe(values => this.validate(values));
```

### React

Com bibliotecas como RxJS-hooks:

```javascript
import { useObservable } from 'rxjs-hooks';

function SearchComponent() {
    const results = useObservable(() =>
        searchInput$.pipe(
            debounceTime(300),
            switchMap(term => searchAPI(term))
        )
    );
    
    return <Results data={results} />;
}
```

### Vue

Com VueRx:

```javascript
export default {
    subscriptions() {
        return {
            users: this.$watchAsObservable('searchTerm').pipe(
                debounceTime(300),
                pluck('newValue'),
                switchMap(term => ajax(`/api/users?q=${term}`))
            )
        };
    }
}
```

---

## 📚 Recursos Adicionais

### Documentação Oficial

- **[RxJS Official Website](https://rxjs.dev/)** - Site oficial
- **[RxJS API Reference](https://rxjs.dev/api)** - API completa
- **[Learn RxJS](https://www.learnrxjs.io/)** - Guias e exemplos
- **[RxMarbles](https://rxmarbles.com/)** - Marble diagrams interativos

### Tutoriais

- [RxJS Tutorial - Official](https://rxjs.dev/guide/overview)
- [RxJS in Practice - Thoughtram](https://blog.thoughtram.io/rxjs/)
- [Ultimate RxJS - Ultimate Courses](https://ultimatecourses.com/blog/category/rxjs)

### Cursos

- **[RxJS - JWDev Treinamentos](https://www.youtube.com/channel/UC-nuC9rI-GnfdWubIzN7FRA)** - Curso base deste projeto
- **RxJS in Angular** - Udemy
- **Reactive Programming with RxJS** - Pluralsight
- **RxJS Beyond the Basics** - Frontend Masters

### Livros

- "RxJS in Action" - Paul P. Daniels, Luis Atencio
- "Learning RxJS" - Kim Maida
- "Reactive Programming with RxJS" - Sergi Mansilla
- "Hands-On Reactive Programming with RxJS" - Packt

### Ferramentas

- **[RxJS DevTools](https://chrome.google.com/webstore/detail/rxjs-devtools)** - Extension Chrome
- **[RxViz](https://rxviz.com/)** - Visualizar Observables
- **[RxFiddle](https://rxfiddle.net/)** - Playground online

### Comunidades

- [RxJS GitHub](https://github.com/ReactiveX/rxjs)
- [Stack Overflow - RxJS](https://stackoverflow.com/questions/tagged/rxjs)
- [Reddit - r/rxjs](https://www.reddit.com/r/rxjs/)
- [Discord - ReactiveX](https://discord.gg/reactivex)

---

## 🔖 Glossário

| Termo | Descrição |
|-------|-----------|
| **Observable** | Stream de valores ao longo do tempo |
| **Observer** | Consumidor que observa Observable |
| **Subscription** | Execução ativa de Observable |
| **Operator** | Função que transforma Observable |
| **Pipe** | Encadeia operators |
| **Subject** | Observable que também é Observer |
| **Hot Observable** | Emite independente de subscribers |
| **Cold Observable** | Só emite quando há subscriber |
| **Stream** | Fluxo de dados/eventos no tempo |
| **Backpressure** | Lidar com produtor rápido, consumidor lento |
| **Marble Diagram** | Representação visual de Observable |

---

## 🎯 Operadores por Categoria

### Creation (Criação)

```javascript
of(1, 2, 3)                           // Valores estáticos
from([1, 2, 3])                       // De array/promise/iterable
fromEvent(button, 'click')            // De evento DOM
interval(1000)                         // A cada 1 segundo
timer(3000, 1000)                     // Delay 3s, depois cada 1s
ajax('http://api.com')                // Requisição HTTP
defer(() => createObservable())       // Lazy creation
```

### Transformation (Transformação)

```javascript
map(x => x * 2)                       // Transforma valores
pluck('response', 'data')             // Extrai propriedades
mapTo('constant')                     // Mapeia para constante
scan((acc, x) => acc + x, 0)          // Acumula (reduce)
buffer(notifier$)                     // Agrupa em arrays
groupBy(x => x.category)              // Agrupa por critério
```

### Filtering (Filtragem)

```javascript
filter(x => x > 10)                   // Filtra valores
take(5)                                // Primeiros 5
takeUntil(notifier$)                  // Até outro emitir
takeWhile(x => x < 100)               // Enquanto condição
skip(3)                                // Pula primeiros 3
debounceTime(300)                     // Debounce
throttleTime(1000)                    // Throttle
distinctUntilChanged()                // Remove duplicatas
first()                                // Apenas primeiro
last()                                 // Apenas último
```

### Combination (Combinação)

```javascript
merge(a$, b$)                         // Mescla streams
concat(a$, b$)                        // Concatena sequencial
combineLatest([a$, b$])              // Combina últimos
withLatestFrom(other$)                // Adiciona último de outro
zip(a$, b$)                           // Combina por índice
race(a$, b$)                          // Primeiro que emitir
startWith(0)                          // Valor inicial
```

### Error Handling (Erros)

```javascript
catchError(err => of([]))             // Captura erro, retorna default
retry(3)                               // Retenta 3 vezes
retryWhen(errors$ => errors$.pipe(   // Retry condicional
    delay(1000)
))
```

### Utility (Utilidade)

```javascript
tap(x => console.log(x))              // Side effect
delay(1000)                            // Atrasa emissões
timeout(5000)                          // Erro se exceder tempo
finalize(() => cleanup())             // Executa ao finalizar
```

### Multicasting

```javascript
share()                                // Compartilha subscription
shareReplay(1)                        // Compartilha + replay último
publish()                              // ConnectableObservable
multicast(subject)                    // Multicast customizado
```

---

## 🧪 Testando RxJS

### Marble Testing

```javascript
import { TestScheduler } from 'rxjs/testing';

describe('Observable', () => {
    let scheduler;
    
    beforeEach(() => {
        scheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });
    
    it('should double values', () => {
        scheduler.run(({ cold, expectObservable }) => {
            const source$ = cold('--a--b--c--|', { a: 1, b: 2, c: 3 });
            const expected = '    --a--b--c--|';
            const result$ = source$.pipe(map(x => x * 2));
            
            expectObservable(result$).toBe(expected, { a: 2, b: 4, c: 6 });
        });
    });
});
```

---

## 🚀 Performance e Otimização

### 1. Compartilhar Observables Caros

```javascript
// ❌ Evitar - Cada subscriber faz nova requisição
const data$ = ajax('/api/data');
data$.subscribe(console.log);  // Request 1
data$.subscribe(console.log);  // Request 2

// ✅ Compartilhar subscription
const data$ = ajax('/api/data').pipe(shareReplay(1));
data$.subscribe(console.log);  // Request 1
data$.subscribe(console.log);  // Reusar resultado
```

### 2. Unsubscribe de Long-running Streams

```javascript
// ✅ Pattern destroy
const destroy$ = new Subject();

// Todas subscriptions param ao emitir destroy$
observable1$.pipe(takeUntil(destroy$)).subscribe();
observable2$.pipe(takeUntil(destroy$)).subscribe();

// Ao destruir componente
destroy$.next();
destroy$.complete();
```

### 3. Usar Operadores Apropriados

```javascript
// Para HTTP requests - use switchMap (cancela anteriores)
search$.pipe(switchMap(term => ajax(term)))

// Para salvar dados - use concatMap (aguarda anterior)
save$.pipe(concatMap(data => ajax.post(data)))

// Para rate limiting - use throttleTime
clicks$.pipe(throttleTime(1000))
```

---

## 🎨 RxJS com Frameworks

### Angular

```typescript
// Component
export class UserComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();
    users$: Observable<User[]>;

    ngOnInit() {
        this.users$ = this.searchTerm$.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap(term => this.userService.search(term)),
            takeUntil(this.destroy$)
        );
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
```

```html
<!-- Template -->
<input [formControl]="searchControl" />
<div *ngFor="let user of users$ | async">
    {{ user.name }}
</div>
```

### React

```javascript
import { useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

function SearchComponent() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const input = document.querySelector('#search');
        const subscription = fromEvent(input, 'input').pipe(
            debounceTime(300),
            map(e => e.target.value),
            switchMap(term => searchAPI(term))
        ).subscribe(setResults);

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div>
            <input id="search" />
            <Results data={results} />
        </div>
    );
}
```

### Vue

```javascript
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

export default {
    data() {
        return {
            results: []
        };
    },
    mounted() {
        const input = this.$refs.search;
        this.subscription = fromEvent(input, 'input').pipe(
            debounceTime(300),
            map(e => e.target.value),
            switchMap(term => this.searchAPI(term))
        ).subscribe(results => {
            this.results = results;
        });
    },
    beforeDestroy() {
        this.subscription.unsubscribe();
    }
}
```

---

## 📊 Subjects

### Tipos de Subjects

#### Subject

```javascript
const subject = new Subject();

subject.subscribe(x => console.log('A:', x));
subject.next(1);                      // A: 1
subject.subscribe(x => console.log('B:', x));
subject.next(2);                      // A: 2, B: 2
```

#### BehaviorSubject

```javascript
// Emite valor inicial e último valor para novos subscribers
const subject = new BehaviorSubject(0);

subject.subscribe(x => console.log('A:', x));  // A: 0
subject.next(1);                               // A: 1
subject.subscribe(x => console.log('B:', x));  // B: 1 (último valor)
subject.next(2);                               // A: 2, B: 2
```

#### ReplaySubject

```javascript
// Replay N últimos valores para novos subscribers
const subject = new ReplaySubject(2);  // Replay 2 últimos

subject.next(1);
subject.next(2);
subject.next(3);
subject.subscribe(x => console.log('A:', x));  // A: 2, A: 3
```

#### AsyncSubject

```javascript
// Emite apenas último valor quando completa
const subject = new AsyncSubject();

subject.next(1);
subject.next(2);
subject.next(3);
subject.complete();
subject.subscribe(x => console.log('A:', x));  // A: 3 (apenas último)
```

---

## 🎯 Padrões de Design com RxJS

### 1. Command Pattern

```javascript
const commands$ = new Subject();

commands$.pipe(
    map(command => executeCommand(command))
).subscribe();

// Emitir comandos
commands$.next({ type: 'SAVE', data: {...} });
commands$.next({ type: 'DELETE', id: 1 });
```

### 2. Observer Pattern

```javascript
// Subject é implementação do Observer Pattern
const dataSource$ = new BehaviorSubject(initialData);

// Múltiplos observers
dataSource$.subscribe(data => updateView1(data));
dataSource$.subscribe(data => updateView2(data));
dataSource$.subscribe(data => logData(data));

// Atualizar dados (notifica todos observers)
dataSource$.next(newData);
```

### 3. Iterator Pattern

```javascript
// Observable é um Iterator assíncrono
const numbers$ = from([1, 2, 3, 4, 5]);

numbers$.subscribe({
    next: x => console.log('Valor:', x),
    complete: () => console.log('Completo')
});
```

---

## 🔥 RxJS 7+ (Versões Mais Recentes)

### Mudanças Principais

```javascript
// RxJS 6 (usado neste projeto)
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// RxJS 7+
import { of, map } from 'rxjs';  // Tudo de 'rxjs'
```

### Novos Recursos RxJS 7

- ✅ **Smaller bundle size** - 50% menor
- ✅ **Better types** - TypeScript melhorado
- ✅ **New operators** - connect, combineLatestWith
- ✅ **Deprecated removed** - Limpar APIs antigas
- ✅ **Better performance** - Otimizações internas

### Migração 6 → 7

```javascript
// RxJS 6
import { combineLatest } from 'rxjs';
combineLatest(a$, b$, (a, b) => ({ a, b }))

// RxJS 7
import { combineLatest } from 'rxjs';
combineLatest([a$, b$]).pipe(
    map(([a, b]) => ({ a, b }))
)
```

---

## 💡 Dicas Pro

### 1. Debug Streams

```javascript
// Adicionar tap para debugging
observable$.pipe(
    tap(x => console.log('Antes do map:', x)),
    map(x => x * 2),
    tap(x => console.log('Depois do map:', x))
).subscribe();
```

### 2. Conditional Logic

```javascript
// Use iif para lógica condicional
const result$ = iif(
    () => condition,
    observableIfTrue$,
    observableIfFalse$
);
```

### 3. Delay Retry

```javascript
// Retry com delay crescente
observable$.pipe(
    retryWhen(errors$ => errors$.pipe(
        scan((retryCount, err) => {
            if (retryCount >= 3) throw err;
            return retryCount + 1;
        }, 0),
        delay(1000)  // Aguarda 1s entre retries
    ))
)
```

---

## 🎓 Exercícios Práticos

### Exercício 1: Contador Cliques

**Objetivo:** Contar quantas vezes botão foi clicado

```javascript
const button = document.querySelector('#btn');
const clicks$ = fromEvent(button, 'click');

// Implementar contador usando scan
clicks$.pipe(
    // Seu código aqui
).subscribe(count => console.log(count));
```

<details>
<summary>Ver Solução</summary>

```javascript
clicks$.pipe(
    scan(count => count + 1, 0)
).subscribe(count => console.log(count));
```
</details>

### Exercício 2: Filtrar Números Pares

**Objetivo:** De um Observable, emitir apenas números pares

```javascript
const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Implementar filtro
numbers$.pipe(
    // Seu código aqui
).subscribe(num => console.log(num));
```

<details>
<summary>Ver Solução</summary>

```javascript
numbers$.pipe(
    filter(x => x % 2 === 0)
).subscribe(num => console.log(num));  // 2, 4, 6, 8, 10
```
</details>

### Exercício 3: Busca com Delay

**Objetivo:** Implementar busca que aguarda usuário parar de digitar

```javascript
const searchInput = document.querySelector('#search');
const input$ = fromEvent(searchInput, 'input');

// Implementar busca com debounce de 500ms
input$.pipe(
    // Seu código aqui
).subscribe(term => console.log('Buscar:', term));
```

<details>
<summary>Ver Solução</summary>

```javascript
input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    distinctUntilChanged(),
    filter(term => term.length >= 3)
).subscribe(term => console.log('Buscar:', term));
```
</details>

---

## 🏆 Sobre o Curso

### JWDev Treinamentos

Este projeto foi desenvolvido como material do curso de RxJS da **JWDev Treinamentos**.

### Informações do Curso

- 📺 **Canal:** [JWDev Treinamentos](https://www.youtube.com/channel/UC-nuC9rI-GnfdWubIzN7FRA)
- 🎓 **Curso:** ReactiveX (RxJS) - Programação Reativa com JavaScript
- 👨‍🏫 **Instrutor:** JWDev
- 🌐 **Plataforma:** YouTube
- 💰 **Custo:** Gratuito
- 🇧🇷 **Idioma:** Português

### O que o Curso Ensina

- ✅ Fundamentos de Programação Reativa
- ✅ Operadores essenciais do RxJS
- ✅ Padrões de uso comuns
- ✅ Aplicações práticas e interativas
- ✅ Casos de uso reais
- ✅ Boas práticas e anti-patterns

### Conteúdo do Curso

1. **Introdução ao ReactiveX**
   - O que é programação reativa
   - História do ReactiveX
   - Por que usar RxJS

2. **Observables e Operators**
   - Criar Observables
   - Operadores de transformação
   - Operadores de filtragem

3. **Controle de Concorrência**
   - mergeMap vs concatMap
   - switchMap vs exhaustMap
   - Quando usar cada um

4. **Aplicações Práticas**
   - Auto-complete
   - Drag and Drop
   - Cancelamento de requisições
   - Controle de eventos

5. **Boas Práticas**
   - Memory leaks
   - Error handling
   - Testing
   - Performance

---

## 🌟 Projetos Reais com RxJS

### Empresas que Usam RxJS

- 🔵 **Microsoft** - VS Code
- 🔴 **Netflix** - Interface web
- 🟢 **Google** - Angular e produtos internos
- 🟡 **Slack** - Real-time messaging
- 🟣 **Asana** - Task management
- 🔵 **Trello** - Drag and drop boards

### Aplicações

1. **Interfaces Reativas**
   - Formulários complexos
   - Dashboards em tempo real
   - Aplicações de chat

2. **Data Streaming**
   - WebSocket connections
   - Server-Sent Events
   - Real-time updates

3. **Automação de UI**
   - Drag and drop
   - Infinite scroll
   - Auto-save

4. **Comunicação de API**
   - HTTP requests com retry
   - Caching
   - Pooling

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/novo-exemplo`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona exemplo de websocket'`)
4. Push para a branch (`git push origin feature/novo-exemplo`)
5. Abra um Pull Request

### Ideias de Contribuição

- 📝 Adicionar mais exemplos práticos
- 🐛 Corrigir bugs ou melhorar código
- 📚 Melhorar documentação
- 🎨 Criar novos demos interativos
- ✅ Adicionar testes
- 🌐 Atualizar para RxJS 7+

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**JWDev Treinamentos**

Material didático do curso de RxJS - Programação Reativa com JavaScript.

- 📺 [Canal YouTube](https://www.youtube.com/channel/UC-nuC9rI-GnfdWubIzN7FRA)
- 🌐 Site: JWDev Treinamentos

---

## 🙏 Agradecimentos

- **[ReactiveX Team](http://reactivex.io/)** - Pela criação do padrão ReactiveX
- **[RxJS Core Team](https://github.com/ReactiveX/rxjs)** - Pelo desenvolvimento do RxJS
- **[JWDev Treinamentos](https://www.youtube.com/channel/UC-nuC9rI-GnfdWubIzN7FRA)** - Pelo excelente curso
- **Comunidade JavaScript** - Por compartilhar conhecimento
- **REST Countries API** - Por fornecer API gratuita

---

## 📊 Estatísticas do Projeto

| Métrica | Valor |
|---------|-------|
| **Linguagem** | JavaScript ES6+ |
| **Biblioteca** | RxJS 6.3.3 |
| **Backend** | Node.js (API mock) |
| **Exemplos** | 4 aplicações interativas |
| **Operadores demonstrados** | 25+ |
| **Linhas de código** | ~300 linhas |
| **Complexidade** | Intermediária |

---

## 🎯 Cheat Sheet RxJS

### Criar Observable

```javascript
// De valores
of(1, 2, 3)
from([1, 2, 3])

// De eventos
fromEvent(button, 'click')

// De Promise
from(fetch('/api'))

// De tempo
interval(1000)
timer(3000)
```

### Transformar

```javascript
map(x => x * 2)
pluck('data', 'value')
scan((acc, x) => acc + x, 0)
```

### Filtrar

```javascript
filter(x => x > 10)
take(5)
takeUntil(stop$)
debounceTime(300)
distinctUntilChanged()
```

### Combinar

```javascript
merge(a$, b$)
concat(a$, b$)
combineLatest([a$, b$])
race(a$, b$)
```

### HTTP

```javascript
// GET
ajax('https://api.com/data')

// POST
ajax({
    url: 'https://api.com/data',
    method: 'POST',
    body: { name: 'John' }
})

// Com operators
ajax('/api').pipe(
    pluck('response'),
    retry(3),
    catchError(() => of([]))
)
```

---

<div align="center">

## 🔄 Programação Reativa com RxJS 🚀

**Tudo é um Stream! Think Reactive!**

### ⭐ Se este projeto foi útil, considere dar uma estrela!

### 📚 Continue explorando a programação reativa!

---

**"Don't call us, we'll call you!"** 📞

**JavaScript + RxJS = Código Reativo e Elegante ❤️**

![RxJS](https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png)

</div>

---

## 📞 Suporte

### Precisa de Ajuda?

- 📖 Consulte a [documentação oficial do RxJS](https://rxjs.dev/)
- 🔍 Pesquise no [Stack Overflow](https://stackoverflow.com/questions/tagged/rxjs)
- 💬 Participe das [discussões no GitHub](https://github.com/ReactiveX/rxjs/discussions)
- 📧 Abra uma issue neste repositório
- 📺 Assista o [curso da JWDev](https://www.youtube.com/channel/UC-nuC9rI-GnfdWubIzN7FRA)

### Comunidades Brasileiras

- [Angular Brasil](https://t.me/angularbrasil)
- [JavaScript Brasil](https://t.me/javascriptbrasil)
- [Frontend Brasil](https://t.me/frontendbrasil)

---

## 🏅 Recursos de Aprendizado

### Tutoriais Interativos

1. **[RxJS Marbles](https://rxmarbles.com/)** - Operadores visuais
2. **[Learn RxJS](https://www.learnrxjs.io/)** - Guias completos
3. **[RxJS DevTools](https://chrome.google.com/webstore/detail/rxjs-devtools)** - Debug visual

### Vídeos Recomendados

- **RxJS Quick Start** - Traversy Media
- **RxJS Top Ten** - Fireship
- **RxJS Crash Course** - Academind
- **Curso RxJS** - JWDev Treinamentos (este projeto)

### Artigos

- [RxJS Best Practices](https://blog.angular-university.io/rxjs-best-practices/)
- [Common RxJS Mistakes](https://blog.strongbrew.io/common-rxjs-mistakes/)
- [RxJS Patterns](https://blog.thoughtram.io/rxjs/)

---

## 📝 Notas Importantes

> 💡 **Dica:** Programação Reativa tem curva de aprendizado. Pratique com exemplos simples antes de usar em produção.

> 🎯 **Convenção:** Use `$` no final de variáveis Observable para fácil identificação (ex: `users$`, `clicks$`).

> 🔄 **Paradigma:** Mude sua mentalidade de "imperative" para "declarative". Pense em streams de dados.

> ⚠️ **Memory Leaks:** Sempre faça `unsubscribe()` ou use `takeUntil()` para prevenir vazamento de memória.

> 🚀 **Performance:** RxJS é poderoso mas pode ser overhead para operações simples. Use quando faz sentido.

---

## 🌐 Links Úteis

- [RxJS Official](https://rxjs.dev/) - Site oficial
- [ReactiveX](http://reactivex.io/) - Padrão ReactiveX
- [RxJS GitHub](https://github.com/ReactiveX/rxjs) - Código fonte
- [Learn RxJS](https://www.learnrxjs.io/) - Tutoriais e exemplos
- [RxMarbles](https://rxmarbles.com/) - Marble diagrams interativos
- [RxViz](https://rxviz.com/) - Visualizar Observables
- [JWDev YouTube](https://www.youtube.com/channel/UC-nuC9rI-GnfdWubIzN7FRA) - Canal do curso

---

## 🎨 Visualização dos Exemplos

### Auto Complete
```
┌──────────────────────────────────┐
│  Busca País                      │
│  ┌────────────────────────────┐  │
│  │ Digite País...             │  │
│  └────────────────────────────┘  │
│  • Brazil                        │
│  • Brunei                        │
│  • British Indian Ocean Territory│
└──────────────────────────────────┘
```

### Drag and Drop
```
┌────────────────────────────┐
│                            │
│    ┌────────┐              │
│    │  Drag  │ ←─ Arrastar  │
│    │  Me!   │              │
│    └────────┘              │
│         SPACE = Clone      │
└────────────────────────────┘
```

### Stop Request
```
┌──────────────────────────────┐
│   [Fazer Request]            │
│                              │
│   Carregando...              │
│                              │
│   [Parar Request]            │
└──────────────────────────────┘
```

---

<div align="center">

**📅 Última atualização:** Abril 2026  
**📌 Versão RxJS:** 6.3.3  
**✅ Status:** Funcional e educacional  
**🔄 Paradigma:** Programação Reativa

---

**"Think in Streams!"** 🌊

**#RxJS #ReactiveX #JavaScript #ReactiveProgramming #Observables #NodeJS**

</div>
