## Exercício 01:


Criar uma calculadora para área do retângulo
- Criar o componente executando os seguintes comandos no terminal:
    ```
    cd src\app\components\
    ng generate component calculadora-retangulo
    ```
- Abrir arquivo app.routes.ts adicionando a rota `calculadora-retangulo`
- Abrir o arquivo de header e adicionar o link para a calculadora de retângulo
- Abrir o arquivo ts gerado
    - Adicionar 2 variáveis do tipo number:
        - base
        - altura
    - Adicionar o FormsModule nos imports
- Abrir o html
    - Adicionar um input para base com label
        - Deve conter o ngModel apontando para uma variável
    - Adicionar um input para altura com label
        - Deve conter o ngModel apontando para uma variável
    - Adicionar um botão com click para uma função calcular
- Abrir o arquiivo ts
    - Adicionar a função calcular
        Implementar o cálculo da área do retângulo
        Apresentar para o usuário a área do retângulo

---

## Exercício 02:

Criar uma calculadora de média de aluno

* Criar o componente executando no terminal:

  ```bash
  cd src\app\components\
  ng generate component calculadora-media
  ```
* Abrir o arquivo app.routes.ts e adicionar a rota calculadora-media
* Abrir o arquivo de header e adicionar o link para a calculadora de média
* Abrir o arquivo ts gerado

  * Adicionar 3 variáveis do tipo number:

    * nota1
    * nota2
    * nota3
  * Adicionar o FormsModule nos imports
* Abrir o HTML

  * Adicionar um input para cada nota com label

    * Cada input deve conter o ngModel apontando para a variável correspondente
  * Adicionar um botão com (click) para uma função calcular
* Abrir o arquivo ts

  * Criar a função calcular

    * Implementar o cálculo da média aritmética das 3 notas
    * Apresentar para o usuário a média do aluno
    * Exibir também se o aluno está Aprovado (média ≥ 7) ou Reprovado (média < 7)

## Exercício 03:

Criar uma calculadora de conversão de temperatura

* Criar o componente executando no terminal:

  ```bash
  cd src\app\components\
  ng generate component calculadora-temperatura
  ```
* Abrir o arquivo app.routes.ts e adicionar a rota calculadora-temperatura
* Abrir o arquivo de header e adicionar o link para a calculadora de temperatura
* Abrir o arquivo ts gerado

  * Adicionar 2 variáveis do tipo number:

    * valor (temperatura de entrada)
    * resultado (temperatura convertida)
  * Adicionar o FormsModule nos imports
* Abrir o HTML

  * Criar um input para digitar a temperatura (ngModel para valor)
  * Criar 6 botões com (click) chamando funções diferentes:

    * Kelvin → Fahrenheit
    * Fahrenheit → Kelvin
    * Kelvin → Celsius
    * Celsius → Kelvin
    * Fahrenheit → Celsius
    * Celsius → Fahrenheit
  * Exibir o resultado da conversão para o usuário
* Abrir o arquivo ts

  * Criar funções de conversão:

    * Kelvin → Fahrenheit:

      ```typescript
      (valor - 273.15) * 9/5 + 32
      ```
    * Fahrenheit → Kelvin:

      ```typescript
      (valor - 32) * 5/9 + 273.15
      ```
    * Kelvin → Celsius:

      ```typescript
      valor - 273.15
      ```
    * Celsius → Kelvin:

      ```typescript
      valor + 273.15
      ```
    * Fahrenheit → Celsius:

      ```typescript
      (valor - 32) * 5/9
      ```
    * Celsius → Fahrenheit:

      ```typescript
      (valor * 9/5) + 32
      ```
  * Atualizar a variável `resultado` em cada função
  * Exibir o valor final no HTML

## Exercício 04

Criar uma lista de tarefas seguindo o mesmo modelo da lista de pessoas.
