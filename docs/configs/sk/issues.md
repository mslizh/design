# StateChart Замечания
### Аннотация <br/>
А - автор замечания <br/>
И - исполнитель
<br/>
<br/>
```mermaid
    stateDiagram-v2
    [*] --> Черновик: А. Создал замечание
    Черновик --> Выдано: А. Нажал "Выдать"
    Выдано --> В_работе: И. Нажал "Принять"
    Выдано --> Отклонено: И. Нажал "Отклонить" <br/> и указал причину
    Отклонено --> Выдано: А. Исправил замечание <br/> и нажал "Выдать"
    В_работе --> Устранено: И. Нажал "Устранено"
    Устранено --> В_работе: А. Нажал "Не подтверждено"
    Устранено --> Проверено: А. Нажал "Подтверждено"
    Проверено --> [*]: А. Нажал "Закрыть замечание"
```
<br/>
<br/>

# Flowchart Отклонить
```mermaid
flowchart TB
    frm(Исполнитель в поле `Принять в работу` выбрал `Отклонить`) --> prch(В поле `Причина отклонения` указал причину)
    prch --> stsotkl(Статус замечания изменился на `Отклонено`)
    stsotkl --> push(Автору отправлено <br/> уведомление о смене статуса)
    push --> change(Автор внес изменения в замечание)
    change --> vdn(Автор в поле `Статус замечания` выбрал `Выдано`)
    vdn --> stsopen(Статус замечания изменился на `Выдано`)
    stsopen --> push2(Исполнителю пришло уведомление о смене статуса)
```
<br/>
<br/>

# Flowchart Принял и устранил замечание
```mermaid
flowchart TB
    frm(Исполнитель в поле `Принять в работу` выбрал `Принять`) --> stsprnt(Статус замечания изменился на `В работе`)
    stsprnt --> push(Автору отправлено <br/> уведомление о смене статуса)
    push --> ustr(Исполнитель устраняет замечание <br/> и в поле `Замечание устранено?` выбирает `Устранено`)
    ustr --> stsustr(Статус замечания изменился на `Устранено`)
    stsustr --> push2(Автору отправлено <br/> уведомление о смене статуса)
```
<br/>
<br/>

# Flowchart Подтверждение устранения
```mermaid
flowchart TB
    frm(Автор открывает замечание) --> issue{Замечание устранено?}
         issue --> |Да| ustr(В поле `Подтверждение устранение` выбрано `Подтверждено`)
            ustr --> cls(В поле `Закрыть замечание` выбрано `Да`)
            cls --> stscls(Статус замечания изменился на `Проверено`)
            stscls --> push1(Исполнителю пришло уведомление о смене статуса)
        issue --> |Нет| neustr(В поле `Подтверждение устранение` выбрано `Не подтверждено`)
            neustr --> obn(Поле `Замечани устранено?` обнуляется)
            obn --> sts(Статус замечания изменился на `В работе`)
            sts --> push(Исполнителю пришло уведомление о смене статуса)
            push --> ustr2(Исполнитель устраняет замечание <br/> и в поле `Замечани устранено?` выбирает `Устранено`)
            ustr2 --> stsustr(Статус замечания изменился на `Устранено`)
            stsustr --> push2(Автору отправлено <br/> уведомление о смене статуса)
            push2 --> frm
```
<br/>
<br/>
<br/>
<br/>
<br/>


# Flowchart Замечания
### Аннотация <br/>
А - автор замечания <br/>
И - исполнитель
```mermaid
flowchart TB
    crtiss(`А` создал замечание) --> prnvr{`И`<br/> Принять в работу}
        prnvr --> |Да| prnl(`И` Принял замечание)
            prnl --> ustr(`И` Устранил замечание)
            ustr --> prvustr{`А`<br/> Замечание устранено?}
                prvustr --> |Да| pdtv(`А` Подтвердил устранение)
                    pdtv --> close(Закрыл замечание)
                prvustr --> |Нет| nepdtv(`А` Не подтвердил устранение)
                nepdtv --> prnl
        prnvr --> |Нет| neprnl(`И` Отклонил замечание по причине)
        neprnl --> chng(`А`Отредактировал замечание <br/>и переоткрыл)
        chng --> prnvr
```
<br/>
<br/>
<br/>
<br/>
<br/>