module.exports = {
    "id": "retail_bap_select_message_01",
    "type": "object",
    "properties": {
        "order": {
            "id": "retail_bap_select_message_02",
            "type": "object",
            "properties": {
                "provider": {
                    "id": "retail_bap_select_message_03",
                    "type": "object",
                    "properties": {
                        "id": {
                            "id": "retail_bap_select_message_04",
                            "type": "string",
                            "minLength": 1
                        },
                        "locations": {
                            "id": "retail_bap_select_message_05",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bap_select_message_06",
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "id": "retail_bap_select_message_07",
                                        "type": "string",
                                        "minLength": 1
                                    }
                                }
                            }
                        }
                    }
                },
                "items": {
                    "id": "retail_bap_select_message_08",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bap_select_message_09",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bap_select_message_10",
                                "type": "string",
                                "minLength": 1
                            },
                            "parent_item_id": {
                                "id": "retail_bap_select_message_23",
                                "type": "string",
                                "minLength": 1
                            },
                            "location_id": {
                                "id": "retail_bap_select_message_11",
                                "type": "string",
                                "minLength": 1
                            },
                            "quantity": {
                                "id": "retail_bap_select_message_12",
                                "type": "object",
                                "properties": {
                                    "count": {
                                        "id": "retail_bap_select_message_13",
                                        "type": "number"
                                    }
                                }
                            },
                            "tags": {
                                "id": "retail_bap_select_message_24",
                                "type": "array",
                                "minItems": 1,
                                "element": {
                                    "id": "retail_bap_select_message_25",
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "id": "retail_bap_select_message_25",
                                            "type": "string",
                                            "minLength": 1,
                                            "enum": ["type", "parent"]
                                        },
                                        "list": {
                                            "id": "retail_bap_select_message_26",
                                            "type": "array",
                                            "minItems": 1,
                                            "element": {
                                                "allOf": [
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "type"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "id": "retail_bap_select_message_27",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bap_select_message_28",
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["type"]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bap_select_message_29",
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["item", "customization"]
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "id"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "id": "retail_bap_select_message_30",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bap_select_message_31",
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["id"]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bap_select_message_32",
                                                                    "type": "string",
                                                                    "minLength": 1
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
                                                "type": "params",
                                                "domain": {
                                                    "const": [
                                                        "ONDC:RET10",
                                                        "ONDC:RET12",
                                                        "ONDC:RET14",
                                                        "ONDC:RET13",
                                                        "ONDC:RET15",
                                                        "ONDC:RET16",
                                                        "ONDC:RET17",
                                                        "ONDC:RET18",
                                                        "ONDC:RET19",
                                                        "ONDC:RET1A",
                                                        "ONDC:RET1B",
                                                        "ONDC:RET1C",
                                                        "ONDC:RET1D"
                                                    ]
                                                }
                                            }
                                        },
                                        "then": [
                                            "id",
                                            "location_id",
                                            "quantity"
                                        ]
                                    },
                                    {
                                        "if": {
                                            "properties": {
                                                "type": "params",
                                                "domain": {
                                                    "const": "ONDC:RET11"
                                                }
                                            }
                                        },
                                        "then": [
                                            "id",
                                            "parent_item_id",
                                            "location_id",
                                            "quantity",
                                            "tags"
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "fulfillments": {
                    "id": "retail_bap_select_message_14",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bap_select_message_15",
                        "type": "object",
                        "properties": {
                            "end": {
                                "id": "retail_bap_select_message_16",
                                "type": "object",
                                "properties": {
                                    "location": {
                                        "id": "retail_bap_select_message_17",
                                        "type": "object",
                                        "properties": {
                                            "gps": {
                                                "id": "retail_bap_select_message_18",
                                                "type": "string",
                                                "minLength": 1,
                                                "compliance": "gps-coord"
                                            },
                                            "address": {
                                                "id": "retail_bap_select_message_19",
                                                "type": "object",
                                                "properties": {
                                                    "area_code": {
                                                        "id": "retail_bap_select_message_20",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "payment": {
                    "id": "retail_bap_select_message_21",
                    "optional": true,
                    "type": "object",
                    "properties": {
                        "type": {
                            "id": "retail_bap_select_message_22",
                            "type": "string",
                            "optional": true,
                            "minLength": 1,
                            "enum": ["ON-ORDER", "ON-FULFILLMENT"]
                        }
                    }
                },
                "offers": {
                    "id": "retail_bap_select_message_23",
                    "type": "array",
                    "optional": true,
                    "minItems": 1,
                    "element": {
                        "id": "retail_bap_select_message_24",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bap_select_message_25",
                                "type": "string",
                                "optional": true,
                                "minLength": 1
                            },
                            "tags": {
                                "id": "retail_bap_select_message_26",
                                "type": "array",
                                "minItems": 1,
                                "element": {
                                    "id": "retail_bap_select_message_27",
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "id": "retail_bap_select_message_28",
                                            "type": "string",
                                            "minLength": 1,
                                            // "enum": ["type", "parent"]
                                        },
                                        "list": {
                                            "id": "retail_bap_select_message_29",
                                            "type": "array",
                                            "minItems": 1,
                                            "element": {
                                                "allOf": [
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "type"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "id": "retail_bap_select_message_30",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bap_select_message_31",
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["type"]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bap_select_message_32",
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["item", "customization"]
                                                                }
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "code": {
                                                                    "const": "id"
                                                                }
                                                            }
                                                        },
                                                        "then": {
                                                            "id": "retail_bap_select_message_33",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bap_select_message_34",
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["id"]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bap_select_message_35",
                                                                    "type": "string",
                                                                    "minLength": 1
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
                        }
                    }
                },
            }
        }
    }
}