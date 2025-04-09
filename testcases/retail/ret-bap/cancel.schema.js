module.exports = {
    "type": "object",
    "properties": {
        "order_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 32
        },
        "cancellation_reason_id": {
            "type": "string",
            "minLength": 1,
            "enum": ["001", "003", "004", "006", "009", "010", "999"]
        }
    }
}