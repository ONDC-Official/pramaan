module.exports = {

    "id": "retail_bap_init_message_01",
    "type": "object",
    "properties": {
        "order": {
            "id": "retail_bap_init_message_02",
            "type": "object",
            "properties": {
                "provider": {
                    "id": "retail_bap_init_message_03",
                    "type": "object",
                    "properties": {
                        "id": {
                            "id": "retail_bap_init_message_04",
                            "type": "string",
                            "minLength": 1
                        },
                        "locations": {
                            "id": "retail_bap_init_message_05",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bap_init_message_06",
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "id": "retail_bap_init_message_07",
                                        "type": "string",
                                        "minLength": 1
                                    }
                                }
                            }
                        }
                    }
                },
                "items": {
                    "id": "retail_bap_init_message_08",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bap_init_message_09",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bap_init_message_10",
                                "type": "string",
                                "minLength": 1
                            },
                            "parent_item_id": {
                                "id": "retail_bap_init_message_11",
                                "type": "string",
                                "minLength": 1
                            },
                            "quantity": {
                                "id": "retail_bap_init_message_12",
                                "type": "object",
                                "properties": {
                                    "count": {
                                        "id": "retail_bap_init_message_13",
                                        "type": "number"
                                    }
                                }
                            },
                            "fulfillment_id": {
                                "id": "retail_bap_init_message_14",
                                "type": "string",
                                "minLength": 1
                            },
                            "tags": {
                                "id": "retail_bap_init_message_47",
                                "type": "array",
                                "minItems": 1,
                                "element": {
                                    "id": "retail_bap_init_message_48",
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "id": "retail_bap_init_message_49",
                                            "type": "string",
                                            "minLength": 1,
                                            "enum": ["type", "parent"]
                                        },
                                        "list": {
                                            "id": "retail_bap_init_message_50",
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
                                                            "id": "retail_bap_init_message_51",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bap_init_message_52",
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["type"]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bap_init_message_53",
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
                                                            "id": "retail_bap_init_message_54",
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "id": "retail_bap_init_message_55",
                                                                    "type": "string",
                                                                    "minLength": 1,
                                                                    "enum": ["id"]
                                                                },
                                                                "value": {
                                                                    "id": "retail_bap_init_message_56",
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
                                            "fulfillment_id",
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
                                            "fulfillment_id",
                                            "quantity",
                                            "tags"
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "billing": {
                    "id": "retail_bap_init_message_15",
                    "type": "object",
                    "properties": {
                        "address": {
                            "id": "retail_bap_init_message_16",
                            "type": "object",
                            "properties": {
                                "name": {
                                    "id": "retail_bap_init_message_17",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "building": {
                                    "id": "retail_bap_init_message_18",
                                    "type": "string",
                                    "optional": true,
                                    "minLength": 1
                                },
                                "locality": {
                                    "id": "retail_bap_init_message_19",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "city": {
                                    "id": "retail_bap_init_message_20",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "state": {
                                    "id": "retail_bap_init_message_21",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "country": {
                                    "id": "retail_bap_init_message_22",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "area_code": {
                                    "id": "retail_bap_init_message_23",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "tax_number": {
                            "id": "retail_bap_init_message_59",
                            "type": "string",
                            "minLength": 1,
                            "optional": true,
                            "compliance": "gst"
                        },
                        "name": {
                            "id": "retail_bap_init_message_24",
                            "type": "string",
                            "minLength": 1
                        },
                        "email": {
                            "id": "retail_bap_init_message_25",
                            "type": "string",
                            "minLength": 1,
                            "compliance": "email",
                            "optional": true
                        },
                        "phone": {
                            "id": "retail_bap_init_message_26",
                            "type": "string",
                            "minLength": 1
                        },
                        "created_at": {
                            "id": "retail_bap_init_message_27",
                            "type": "string",
                            "minLength": 1,
                            "format": "rfc3339-date-time",
                            "errorMessage": "Time must be RFC3339 UTC timestamp format."
                        },
                        "updated_at": {
                            "id": "retail_bap_init_message_28",
                            "type": "string",
                            "minLength": 1,
                            "format": "rfc3339-date-time",
                            "errorMessage": "Time must be RFC3339 UTC timestamp format."
                        }
                    }
                },
                "fulfillments": {
                    "id": "retail_bap_init_message_29",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bap_init_message_30",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bap_init_message_31",
                                "type": "string",
                                "minLength": 1
                            },
                            "type": {
                                "id": "retail_bap_init_message_32",
                                "type": "string",
                                "minLength": 1,
                                "enum": ["Delivery"]
                            },
                            "end": {
                                "id": "retail_bap_init_message_33",
                                "type": "object",
                                "properties": {
                                    "location": {
                                        "id": "retail_bap_init_message_34",
                                        "type": "object",
                                        "properties": {
                                            "gps": {
                                                "id": "retail_bap_init_message_35",
                                                "type": "string",
                                                "minLength": 1,
                                                "compliance": "gps-coord"
                                            },
                                            "address": {
                                                "id": "retail_bap_init_message_36",
                                                "type": "object",
                                                "properties": {
                                                    "name": {
                                                        "id": "retail_bap_init_message_37",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "building": {
                                                        "id": "retail_bap_init_message_38",
                                                        "type": "string",
                                                        "minLength": 1,
                                                        "optional": true
                                                    },
                                                    "locality": {
                                                        "id": "retail_bap_init_message_39",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "city": {
                                                        "id": "retail_bap_init_message_40",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "state": {
                                                        "id": "retail_bap_init_message_41",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "country": {
                                                        "id": "retail_bap_init_message_42",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "area_code": {
                                                        "id": "retail_bap_init_message_43",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "contact": {
                                        "id": "retail_bap_init_message_44",
                                        "type": "object",
                                        "properties": {
                                            "phone": {
                                                "id": "retail_bap_init_message_45",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "email": {
                                                "id": "retail_bap_init_message_46",
                                                "type": "string",
                                                "minLength": 1,
                                                "compliance": "email",
                                                "optional": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "offers": {
                    "id": "retail_bap_select_message_47",
                    "type": "object",
                    "optional": true,
                    "minItems": 1,
                    "element": {
                        "id": "retail_bap_select_message_48",
                        "type": "object",
                        "properties": {
                            "id": {
                                "id": "retail_bap_select_message_49",
                                "type": "string",
                                "optional": true,
                                "minLength": 1
                            }
                        }
                    }
                },
            }
        }
    }
}