module.exports = {
    "type": "object",
    "properties": {
        "update_target": {
            "type": "string",
            "minLength": 1
        },
        "order": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 32
                },
                "fulfillments": {
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "minLength": 1
                            },
                            "type": {
                                "type": "string",
                                "minLength": 1
                            },
                            "tags": {
                                "type": "array",
                                "minItems": 1,
                                "element": {
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "type": "string",
                                            "minLength": 1,
                                            "enum": [
                                                "return_request"
                                            ]
                                        },
                                        "list": {
                                            "type": "array",
                                            "minItems": 1,
                                            "element": {
                                                "allOf": [
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "id"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["id"]
                                                                },
                                                                "value": {
                                                                    "type": "string",
                                                                    "minLength": 1
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "item_id"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["item_id"]
                                                                },
                                                                "value": {
                                                                    "type": "string",
                                                                    "minLength": 1
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "parent_item_id"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["parent_item_id"]
                                                                },
                                                                "value": {
                                                                    "type": "string",
                                                                    "minLength": 1
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "item_quantity"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["item_quantity"]
                                                                },
                                                                "value": {
                                                                    "type": "string",
                                                                    "minLength": 1
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "reason_id"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["reason_id"]
                                                                },
                                                                "value": {
                                                                    "type": "string",
                                                                    "minLength": 1
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "reason_desc"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["reason_desc"]
                                                                },
                                                                "value": {
                                                                    "type": "string",
                                                                    "minLength": 0
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "images"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["images"]
                                                                },
                                                                "value": {
                                                                    "type": "string",
                                                                    "minLength": 1
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "ttl_approval"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["ttl_approval"]
                                                                },
                                                                "value": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "format": "duration",
                                                                    "errorMessage": "Duration must be RFC3339 duration."
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "ttl_reverseqc"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["ttl_reverseqc"]
                                                                },
                                                                "value": {
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "format": "duration",
                                                                    "errorMessage": "Duration must be RFC3339 duration."
                                                                }
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "required": {
                            "type": "array",
                            "element": {
                                "allOf": [
                                    {
                                        "if": {
                                            "properties": {
                                                "update_target": {
                                                    "const": "item"
                                                }
                                            }
                                        },
                                        "then": [
                                            "type",
                                            "tags"
                                        ]
                                    },
                                    {
                                        "if": {
                                            "properties": {
                                                "update_target": {
                                                    "const": "payment"
                                                }
                                            }
                                        },
                                        "then": [
                                            "type",
                                            "id"
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "payment": {
                    "type": "object",
                    "properties": {
                        "@ondc/org/settlement_details": {
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "type": "object",
                                "properties": {
                                    "settlement_timestamp": {
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_counter_party": {
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_phase": {
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_type": {
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_amount": {
                                        "type": "string",
                                        "minLength": 1
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "required": {
                "type": "array",
                "element": {
                    "allOf": [
                        {
                            "if": {
                                "properties": {
                                    "update_target": {
                                        "const": "payment"
                                    }
                                }
                            },
                            "then": [
                                "id",
                                "fulfillments",
                                "payment"
                            ]
                        },
                        {
                            "if": {
                                "properties": {
                                    "update_target": {
                                        "const": "item"
                                    }
                                }
                            },
                            "then": [
                                "id",
                                "fulfillments",
                            ]
                        }
                    ]
                }
            }
        }
    },
    "required": ["order"]
}