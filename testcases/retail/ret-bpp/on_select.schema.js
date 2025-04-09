// max id - 75 fulfillments, items, quote, provider
module.exports = {
    "id": "retail_bpp_on_select_message_01",
    "type": "object",
    "properties": {
        "order": {
            "id": "retail_bpp_on_select_message_02",
            "type": "object",
            "properties": {
                "fulfillments": {
                    "id": "retail_bpp_on_select_message_03",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bpp_on_select_message_04",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bpp_on_select_message_05",
                                "type": "string",
                                "minLength": 1
                            },
                            "type": {
                                "id": "retail_bpp_on_select_message_06",
                                "type": "string",
                                "minLength": 1
                            },
                            "@ondc/org/provider_name": {
                                "id": "retail_bpp_on_select_message_07",
                                "type": "string",
                                "minLength": 0
                            },
                            "tracking": {
                                "id": "retail_bpp_on_select_message_08",
                                "type": "boolean",
                                "enum": [true, false]
                            },
                            "@ondc/org/category": {
                                "id": "retail_bpp_on_select_message_09",
                                "type": "string",
                                "minLength": 1
                            },
                            "@ondc/org/TAT": {
                                "id": "retail_bpp_on_select_message_10",
                                "type": "string",
                                "minLength": 1,
                                "format": "duration"
                            },
                            "state": {
                                "id": "retail_bpp_on_select_message_11",
                                "type": "object",
                                "properties": {
                                    "descriptor": {
                                        "id": "retail_bpp_on_select_message_12",
                                        "type": "object",
                                        "properties": {
                                            "code": {
                                                "id": "retail_bpp_on_select_message_13",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "items": {
                    "id": "retail_bpp_on_select_message_14",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bpp_on_select_message_15",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bpp_on_select_message_16",
                                "type": "string",
                                "minLength": 1
                            },
                            "parent_item_id": {
                                "id": "retail_bpp_on_select_message_75",
                                "type": "string"
                            },
                            "quantity": {
                                "id": "retail_bpp_on_select_message_17",
                                "type": "object",
                                "optional": true,
                                "properties": {
                                    "count": {
                                        "id": "retail_bpp_on_select_message_18",
                                        "type": "number",
                                        "optional": true
                                    }
                                }
                            },
                            "fulfillment_id": {
                                "id": "retail_bpp_on_select_message_19",
                                "type": "string",
                                "minLength": 1
                            },
                            "tags": {
                                "id": "retail_bpp_on_select_message_65",
                                "type": "array",
                                "minItems": 1,
                                "element": {
                                    "id": "retail_bpp_on_select_message_66",
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "id": "retail_bpp_on_select_message_67",
                                            "type": "string",
                                            "enums": ["parent", "type"]
                                        },
                                        "list": {
                                            "id": "retail_bpp_on_select_message_68",
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
                                                            "id": "retail_bpp_on_select_message_69",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bpp_on_select_message_70",
                                                                    "type": "string",
                                                                    "enum": ["type"]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bpp_on_select_message_71",
                                                                    "type": "string",
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
                                                            "id": "retail_bpp_on_select_message_72",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bpp_on_select_message_73",
                                                                    "type": "string",
                                                                    "enum": ["id"]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bpp_on_select_message_74",
                                                                    "type": "string"
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
                                                        "ONDC:RET13",
                                                        "ONDC:RET14",
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
                                            "quantity",
                                            "fulfillment_id"
                                        ]
                                    },
                                    {
                                        "if": {
                                            "properties": {
                                                "type": "params",
                                                "domain": {
                                                    "const": [
                                                        "ONDC:RET11"
                                                    ]
                                                }
                                            }
                                        },
                                        "then": [
                                            "id",
                                            "quantity",
                                            "fulfillment_id",
                                            "parent_item_id",
                                            "tags"
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "quote": {
                    "id": "retail_bpp_on_select_message_20",
                    "type": "object",
                    "properties": {
                        "price": {
                            "id": "retail_bpp_on_select_message_21",
                            "type": "object",
                            "properties": {
                                "currency": {
                                    "id": "retail_bpp_on_select_message_22",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "value": {
                                    "id": "retail_bpp_on_select_message_23",
                                    "type": "string",
                                    "minLength": 1,
                                    "compliance": "price",
                                    "errorMessage": "should have two places of decimal"
                                }
                            }
                        },
                        "breakup": {
                            "id": "retail_bpp_on_select_message_24",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_select_message_25",
                                "type": "object",
                                "properties": {
                                    "@ondc/org/item_id": {
                                        "id": "retail_bpp_on_select_message_26",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "title": {
                                        "id": "retail_bpp_on_select_message_27",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "@ondc/org/item_quantity": {
                                        "id": "retail_bpp_on_select_message_28",
                                        "type": "object",
                                        "properties": {
                                            "count": {
                                                "id": "retail_bpp_on_select_message_29",
                                                "type": "number"
                                            }
                                        }
                                    },
                                    "@ondc/org/title_type": {
                                        "id": "retail_bpp_on_select_message_30",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "price": {
                                        "id": "retail_bpp_on_select_message_31",
                                        "type": "object",
                                        "properties": {
                                            "currency": {
                                                "id": "retail_bpp_on_select_message_32",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "value": {
                                                "id": "retail_bpp_on_select_message_33",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "item": {
                                        "id": "retail_bpp_on_select_message_34",
                                        "type": "object",
                                        "properties": {
                                            "parent_item_id": {
                                                "id": "retail_bpp_on_select_message_49",
                                                "type": "string"
                                            },
                                            "quantity": {
                                                "id": "retail_bpp_on_select_message_35",
                                                "type": "object",
                                                "properties": {
                                                    "available": {
                                                        "id": "retail_bpp_on_select_message_36",
                                                        "type": "object",
                                                        "properties": {
                                                            "count": {
                                                                "id": "retail_bpp_on_select_message_37",
                                                                "type": "string",
                                                                "minLength": 1
                                                            }
                                                        }
                                                    },
                                                    "maximum": {
                                                        "id": "retail_bpp_on_select_message_38",
                                                        "type": "object",
                                                        "properties": {
                                                            "count": {
                                                                "id": "retail_bpp_on_select_message_39",
                                                                "type": "string",
                                                                "minLength": 1
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "price": {
                                                "id": "retail_bpp_on_select_message_40",
                                                "type": "object",
                                                "properties": {
                                                    "currency": {
                                                        "id": "retail_bpp_on_select_message_41",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "value": {
                                                        "id": "retail_bpp_on_select_message_42",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "tags": {
                                                "id": "retail_bpp_on_select_message_50",
                                                "type": "array",
                                                "element": {
                                                    "id": "retail_bpp_on_select_message_51",
                                                    "type": "object",
                                                    "properties": {
                                                        "code": {
                                                            "id": "retail_bpp_on_select_message_52",
                                                            "type": "string",
                                                            "enum": [
                                                                "type",
                                                                "parent",
                                                                "child",
                                                                "origin",
                                                                "veg_nonveg",
                                                                "custom_group"
                                                            ]
                                                        },
                                                        "list": {
                                                            "id": "retail_bpp_on_select_message_53",
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
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "code": {
                                                                                    "id": "retail_bpp_on_select_message_55",
                                                                                    "type": "string",
                                                                                    "enum": ["type"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_select_message_56",
                                                                                    "type": "string",
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
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "code": {
                                                                                    "id": "retail_bpp_on_select_message_57",
                                                                                    "type": "string",
                                                                                    "enum": ["id"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_select_message_58",
                                                                                    "type": "string"
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "if": {
                                                                            "properties": {
                                                                                "code": {
                                                                                    "const": "country"
                                                                                }
                                                                            }
                                                                        },
                                                                        "then": {
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "code": {
                                                                                    "id": "retail_bpp_on_select_message_59",
                                                                                    "type": "string",
                                                                                    "enum": ["country"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_select_message_60",
                                                                                    "type": "string",
                                                                                    "pattern": "^[A-Z]{3}$", "minLength": 1, "errorMessage": "Country must be in ISO 3166-1 format (three-letter country code)"
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "if": {
                                                                            "properties": {
                                                                                "code": {
                                                                                    "const": "veg"
                                                                                }
                                                                            }
                                                                        },
                                                                        "then": {
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "code": {
                                                                                    "id": "retail_bpp_on_select_message_61",
                                                                                    "type": "string",
                                                                                    "enum": ["veg"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_select_message_62",
                                                                                    "type": "string",
                                                                                    "enum": ["yes", "no"]
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "if": {
                                                                            "properties": {
                                                                                "code": {
                                                                                    "const": "default"
                                                                                }
                                                                            }
                                                                        },
                                                                        "then": {
                                                                            "type": "object",
                                                                            "properties": {
                                                                                "code": {
                                                                                    "id": "retail_bpp_on_select_message_63",
                                                                                    "type": "string",
                                                                                    "enum": ["default"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_select_message_64",
                                                                                    "type": "string",
                                                                                    "enum": ["yes", "no"]
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    "required": [
                                                        "code",
                                                        "list"
                                                    ],
                                                    "additionalProperties": false
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
                                                                        "ONDC:RET11"
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        "then": [
                                                            "parent_item_id",
                                                            "quantity",
                                                            "price",
                                                            "tags"
                                                        ]
                                                    },
                                                    {
                                                        "if": {
                                                            "properties": {
                                                                "type": "params",
                                                                "domain": {
                                                                    "const": [
                                                                        "ONDC:RET10",
                                                                        "ONDC:RET12",
                                                                        "ONDC:RET13",
                                                                        "ONDC:RET14",
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
                                                            "quantity",
                                                            "price"
                                                        ]
                                                    }
                                                ]
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
                                                        "@ondc/org/title_type": {
                                                            "const": "item"
                                                        }
                                                    }
                                                },
                                                "then": [
                                                    "@ondc/org/item_id",
                                                    "title",
                                                    "@ondc/org/item_quantity",
                                                    "@ondc/org/title_type",
                                                    "price",
                                                    "item"
                                                ]
                                            },
                                            {
                                                "if": {
                                                    "properties": {
                                                        "@ondc/org/title_type": {
                                                            "const": "delivery"
                                                        }
                                                    }
                                                },
                                                "then": [
                                                    "@ondc/org/item_id",
                                                    "@ondc/org/title_type",
                                                    "title",
                                                    "price"
                                                ]
                                            },
                                            {
                                                "if": {
                                                    "properties": {
                                                        "@ondc/org/title_type": {
                                                            "const": ["packing", "misc", "tax"]
                                                        }
                                                    }
                                                },
                                                "then": [
                                                    "@ondc/org/item_id",
                                                    "@ondc/org/title_type",
                                                    "title",
                                                    "price",
                                                ]
                                            },
                                            {
                                                "if": {
                                                    "properties": {
                                                        "@ondc/org/title_type": {
                                                            "const": ["tax"]
                                                        }
                                                    }
                                                },
                                                "then": [
                                                    "@ondc/org/item_id",
                                                    "@ondc/org/title_type",
                                                    "title",
                                                    "price",
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        "ttl": {
                            "id": "retail_bpp_on_select_message_43",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "provider": {
                    "id": "retail_bpp_on_select_message_44",
                    "type": "object",
                    "properties": {
                        "id": {
                            "id": "retail_bpp_on_select_message_45",
                            "type": "string",
                            "minLength": 1
                        },
                        "locations": {
                            "id": "retail_bpp_on_select_message_46",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_select_message_47",
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "id": "retail_bpp_on_select_message_48",
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
}