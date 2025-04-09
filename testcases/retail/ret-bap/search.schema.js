module.exports = {
    "id": "retail_bap_search_message_01",
    "type": "object",
    "properties": {
        "intent": {
            "id": "retail_bap_search_message_02",
            "type": "object",
            "properties": {
                "payment": {
                    "id": "retail_bap_search_message_03",
                    "type": "object",
                    "optional": true,
                    "properties": {
                        "@ondc/org/buyer_app_finder_fee_type": {
                            "id": "retail_bap_search_message_04",
                            "type": "string",
                            "optional": true,
                            "minLength": 1
                        },
                        "@ondc/org/buyer_app_finder_fee_amount": {
                            "id": "retail_bap_search_message_05",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "tags": {
                    "id": "retail_bap_search_message_06",
                    "type": "array",
                    "minItems": 1,
                    "optional": true,
                    "element": {
                        "id": "retail_bap_search_message_07",
                        "type": "object",
                        "properties": {
                            "code": {
                                "id": "retail_bap_search_message_08",
                                "type": "string",
                                "minLength": 1,
                                "enum": ["catalog_full", "catalog_inc"]
                            },
                            "list": {
                                "id": "retail_bap_search_message_09",
                                "type": "array",
                                "minItems": 1,
                                "optional": true,
                                "element": {
                                    "allOf": [
                                        {
                                            "if": {
                                                "properties": {
                                                    "code": {
                                                        "const": "payload_type"
                                                    }
                                                }
                                            },
                                            "then": {
                                                "id": "retail_bap_search_message_10",
                                                "type": "object",
                                                "properties": {
                                                    "code": {
                                                        "id": "retail_bap_search_message_11",
                                                        "type": "string",
                                                        "optional": true,
                                                        "enum": ["payload_type"]
                                                    },
                                                    "value": {
                                                        "id": "retail_bap_search_message_12",
                                                        "type": "string",
                                                        "optional": true,
                                                        "enum": ["inline", "link"]
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "if": {
                                                "properties": {
                                                    "code": {
                                                        "const": "start_time"
                                                    }
                                                }
                                            },
                                            "then": {
                                                "id": "retail_bap_search_message_13",
                                                "type": "object",
                                                "properties": {
                                                    "code": {
                                                        "id": "retail_bap_search_message_14",
                                                        "type": "string",
                                                        "enum": ["start_time"]
                                                    },
                                                    "value": {
                                                        "id": "retail_bap_search_message_15",
                                                        "type": "string",
                                                        "format": "rfc3339-date-time",
                                                        "errorMessage": "Time must be RFC3339 UTC timestamp format."
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "if": {
                                                "properties": {
                                                    "code": {
                                                        "const": "end_time"
                                                    }
                                                }
                                            },
                                            "then": {
                                                "id": "retail_bap_search_message_16",
                                                "type": "object",
                                                "properties": {
                                                    "code": {
                                                        "id": "retail_bap_search_message_17",
                                                        "type": "string",
                                                        "enum": ["end_time"]
                                                    },
                                                    "value": {
                                                        "id": "retail_bap_search_message_18",
                                                        "type": "string",
                                                        "format": "rfc3339-date-time",
                                                        "errorMessage": "Time must be RFC3339 UTC timestamp format."
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "if": {
                                                "properties": {
                                                    "code": {
                                                        "const": "mode"
                                                    }
                                                }
                                            },
                                            "then": {
                                                "id": "retail_bap_search_message_19",
                                                "type": "object",
                                                "properties": {
                                                    "code": {
                                                        "id": "retail_bap_search_message_20",
                                                        "type": "string",
                                                        "enum": ["mode"]
                                                    },
                                                    "value": {
                                                        "id": "retail_bap_search_message_21",
                                                        "type": "string",
                                                        "enum": ["start", "stop"]
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                },
                "category": {
                    "id": "retail_bap_search_message_22",
                    "type": "object",
                    "optional": true,
                    "properties": {
                        "id": {
                            "id": "retail_bap_search_message_23",
                            "type": "string",
                            "optional": true,
                        }
                    }
                },
                "fulfillment": {
                    "id": "retail_bap_search_message_24",
                    "type": "object",
                    "optional": true, "properties": {
                        "type": {
                            "id": "retail_bap_search_message_25",
                            "type": "string",
                            "optional": true,
                            "minItems": 1,
                        }
                    }
                },
            }
        }
    }
}