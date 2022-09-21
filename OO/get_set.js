const object = {
    _value: 1,
    get value() { return this._value },
    set value(value) {
        if (value > this._value) {
            this._value = value
        }
    }
}

console.log(object.value, object.value)
object.value = 100
console.log(object.value, object.value)
object.value = 10
console.log(object.value, object.value)