# Работа в Plasmic

[Общий процесс](#общий-процесс)

[Добавление новых кодовых компонентов](#добавление-новых-кодовых-компонентов)

[Изменение темы приложения](#изменение-темы-приложения)

<br/>
<br/>

# Общий процесс

```mermaid
sequenceDiagram
   actor designer as Дизайнер
   participant plasmic as Plasmic
   actor developer as Разработчик
   actor qa as QA


   designer ->> plasmic: Добавь компоненты по ссылке
   activate plasmic
   activate designer
   plasmic -->> designer: Компоненты добавлены


   Note over designer,plasmic: Прототип сделан


   designer ->> plasmic: Опубликуй версию
   plasmic -->> designer: Версия опубликована

   designer ->> plasmic: Добавь вьюверов в проект
   deactivate designer


   activate qa
   activate developer
   par
      plasmic ->> developer: Вас добавили в проект
   and
      plasmic ->> qa: Вас добавили в проект
   end
   deactivate plasmic


   activate designer
   opt share link
      designer ->> developer: Ссылка на версию спецификации
      designer ->> qa: Ссылка на версию спецификации
   end
   deactivate designer
   deactivate qa
   deactivate developer
```

<br />
<br />
<br />

# Добавление новых кодовых компонентов

```mermaid
sequenceDiagram
   actor designer as Дизайнер
   participant github as GitHub
   participant plasmic as Plasmic

   designer ->> github: git clone
   activate github
   activate designer
   github -->> designer: Репозиторий склонирован
   deactivate github

   Note left of designer: Зарегистрировал компоненты
   designer ->> plasmic: Добавь компоненты c localhost
   activate plasmic
   plasmic -->> designer: Компоненты добавлены
   Note left of designer: Протестировал компоненты
   deactivate plasmic

   designer ->> github: git commit & push
   activate github
   github -->> designer: Коммит добавлен
   deactivate github
   deactivate designer
```

<br />

Для добавления новых компонентов необходимо:
Скачать репозиторий себе на компьютер с помощью команды:

```
git clone https://github.com/mslizh/design.git
```

Установить необходимые зависимости c помощью команды:

```
npm install
```

В папке `components` создать новую папку с именем регистрируемого компонента. В этой папке создать два файла: `ComponentName.ts` и `index.ts`.

В файле `ComponentName.ts` написать функцию регистрации компонента:

```ts
import ComponentName from "library-name";
import { registerComponent } from "@plasmicapp/host";

export function registerComponentName() {
   registerComponent(ComponentName, {
      name: "ComponentName",
      props: {
         // Указать свойства, которые необходимо вынести в интерфейс Plasmic.
      },
      importPath: "library-name",
   });
}
```

`ComponentName` и `library-name` заменить на название своего компонента и библиотеки, из которой он импортируется.

<br />
<br />

# Изменение темы приложения

В плазмик подключается отдельная тема, которая выступает спецификацией для разработчиков. Если необходимо внести какое-либо изменение в тему можно руководствоваться тем же процессом, что и для [добавления кодовых компонентов](#добавление-новых-кодовых-компонентов). После этого тема передаётся разработчикам, как спецификация, и они вносят изменения в клиентском репозитории.
