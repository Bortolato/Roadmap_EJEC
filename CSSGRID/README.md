# CSS GRID

## GRID

    -   Bidimensional
    -   Divisão de toda a página em linhas e colunas
    -   Colocar os elementos onde quiser nessa divisão

    ---

## GRID OU FLEXBOX

    -   Grid: duas dimensões (linhas e colunas)
    -   Flexbox: uma dimensão (ou linha ou coluna)
    -   Um complementa o trabalho do outro
    -   Verificar qual navegador ainda nao aceita o grid

## ESCOPO LAYOUT

    -   Header
    -   Conteúdo sidebar
    -   Footer

## PROPRIEDADES

    -       Separar em dois grupos:
            'Container' e 'item(s)'

### CONTAINER

    -   display: grid;              //inicia falando que é grid
    -   grid-template-columns;      //inicia as colunas e quantidade
    -   grid-template-rows;         //inicia as linhas e quantidade
    -   grid-gap;                   //sobre espaçamentos
    -   grid-row-gap;
    -   grid-column-gap;
    -   grid-template-areas;        //sobre espaçamentos

    ... e mais 4 propriedades de alinhamento

### ITEM(S)

    -   grid-column
    -   grid-column-start
    -   grid-column-end
    -   grid-row
    -   grid-row-start
    -   grid-row-end
    -   grid-area

    ... e mais 2 propriedades de alinhamento

#### ALINHAMENTO
    Existem 6 propriedades para o alinhamento:
    -   'justify-content'
    -   'align-content'
    -   'justify-items'
    -   'align-items'
    -   'justify-self'
    -   'align-self'

    -   'justify' e 'align'
    -   'content', 'items' e 'self'

##  justify e align

Sabendo que o grid e bidimensional, nós temos o eixo x e y.
O *eixo x* é o posicionamento horizontal e da esquerda para a direita
O *eixo y* é o posicionamento vertical de cima para baixo

##  content

'justify-content' e 'align-content' nos permite alinhar o próprio grid, relativo ao espaço fora do grid

O uso dessas propriedades são raras, pois só é aplicado caso o grid seja menor que a area definida. (Por exemplo, quando usamos em px o tamanho do grid, poderemos terminar com um grid pequeno para o tamanho da area do grid)

Pode ser usado 7 valores:
    1. Start
    2. End
    3. Center
    4. Stretch
    5. Space-between
    6.  Space-around
    7.  Space-evenly


##  items

'justify-items' e 'align-items' vai permitir alinhar os items do nosso grid, em qualquer espaço disponível, na célula que ele habitar

Pode ser usado 4 valores:
    1. Start
    2. End
    3. Center
    4. Stretch

##  self

'justify-self' e 'align-self' vai nos permitir alinhar o item em si

