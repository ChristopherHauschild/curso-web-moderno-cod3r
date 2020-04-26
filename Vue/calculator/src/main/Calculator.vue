<template>
    <div class="calculator">
        <Display :value="displayValue"/>
        <Button label="AC" triple @onClick="clearMemory"/>
        <Button label="/" operation @onClick="setOperation"/>
        <Button label="7" @onClick="addDigito"/>
        <Button label="8" @onClick="addDigito"/>
        <Button label="9" @onClick="addDigito"/>
        <Button label="*" operation @onClick="setOperation"/>
        <Button label="4" @onClick="addDigito"/>
        <Button label="5" @onClick="addDigito"/>
        <Button label="6" @onClick="addDigito"/>
        <Button label="-" operation @onClick="setOperation"/>
        <Button label="1" @onClick="addDigito"/>
        <Button label="2" @onClick="addDigito"/>
        <Button label="3" @onClick="addDigito"/>
        <Button label="+" operation @onClick="setOperation"/>
        <Button label="0" double @onClick="addDigito"/>
        <Button label="." @onClick="addDigito"/>
        <Button label="=" operation @onClick="setOperation"/>
    </div>
</template>

<script>
import Display from '../components/Display'
import Button from '../components/Button'

export default {
    data: function() {
        return { // Estado inicial
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0 // Qual dos valores está sendo trabalho | Indice array values
        }
    },
    components: { Button, Display,},
    methods: { // Atribuindo estado inicial do objeto
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
            // Quando usuário estiver informando primeiro valor
            if (this.current === 0 ) {
                this.operation = operation
                this.current = 1
                // Quando iniciar a digitar segundo valor | Após operação 
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        // Realiza operação passada anteriormente
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch (e) {
                    this.$emit('onError', e)
                }

                this.values[1] = 0
                // Indice 1 do vetor zerado
                // Indice 0 do vetor recebe resultado da operação 
                this.displayValue = this.values[0]

                this.operation = equals ? null : operation
                // Se usuário selecionou "=", resultado passa para indice 0, senão vai para indice 1
                this.current = equals ? 0 : 1

                // Se operação for diferente de "=" limpa o display
                this.clearDisplay = !equals 
            }
        },
        addDigito(n) {
            if(n === "." && this.displayValue.includes(".")) {
                return
            }
            // Casos em que irá limpar o display
            const clearDisplay = this.displayValue === "0"
                || this.clearDisplay

            // currentValue recebe vazio se clearDisplay estiver setado, do contrário recebe o valor do display
            const currentValue = clearDisplay ? "" : this.displayValue
            // displayValue recebe currentValue com o digito passado
            const displayValue = currentValue + n

            // Tornando displayValue disponível para outras funções
            this.displayValue = displayValue
            this.clearDisplay = false

            // Alternativa
            // Indice do array recebe o valor no display
            this.values[this.current] = displayValue


            // if (n !== "." ) {
            //     // Coloca valor no devido indice do array
            //     const i = this.current
            //     // Define newValue para que se possa realizar a operação entre dois indices do array
            //     const newValue = parseFloat(displayValue)
            //     this.values[i] = newValue
            // }
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>