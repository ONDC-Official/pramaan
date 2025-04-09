// max id - 159 billing, created_at, id, payment, provider, quote, state, updated_at
module.exports = {
    "id": "retail_bpp_on_update_message_01",
    "type": "object",
    "properties": {
        "order": {
            "id": "retail_bpp_on_update_message_02",
            "type": "object",
            "properties": {
                "billing": {
                    "id": "retail_bpp_on_update_message_03",
                    "type": "object",
                    "properties": {
                        "address": {
                            "id": "retail_bpp_on_update_message_04",
                            "type": "object",
                            "properties": {
                                "area_code": {
                                    "id": "retail_bpp_on_update_message_05",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "building": {
                                    "id": "retail_bpp_on_update_message_06",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "city": {
                                    "id": "retail_bpp_on_update_message_07",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "country": {
                                    "id": "retail_bpp_on_update_message_08",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "locality": {
                                    "id": "retail_bpp_on_update_message_09",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "name": {
                                    "id": "retail_bpp_on_update_message_10",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "state": {
                                    "id": "retail_bpp_on_update_message_11",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "created_at": {
                            "id": "retail_bpp_on_update_message_12",
                            "type": "string",
                            "minLength": 1,
                            "format": "rfc3339-date-time",
                            "errorMessage": "Time must be RFC3339 UTC timestamp format."
                        },
                        "email": {
                            "id": "retail_bpp_on_update_message_13",
                            "type": "string",
                            "minLength": 1
                        },
                        "name": {
                            "id": "retail_bpp_on_update_message_14",
                            "type": "string",
                            "minLength": 1
                        },
                        "phone": {
                            "id": "retail_bpp_on_update_message_15",
                            "type": "string",
                            "minLength": 1
                        },
                        "updated_at": {
                            "id": "retail_bpp_on_update_message_16",
                            "type": "string",
                            "minLength": 1,
                            "format": "rfc3339-date-time",
                            "errorMessage": "Time must be RFC3339 UTC timestamp format."
                        }
                    }
                },
                "created_at": {
                    "id": "retail_bpp_on_update_message_17",
                    "type": "string",
                    "minLength": 1,
                    "format": "rfc3339-date-time",
                    "errorMessage": "Time must be RFC3339 UTC timestamp format."
                },
                "fulfillments": {
                    "id": "retail_bpp_on_update_message_18",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bpp_on_update_message_19",
                        "type": "object",
                        "properties": {
                            "@ondc/org/TAT": {
                                "id": "retail_bpp_on_update_message_20",
                                "type": "string",
                                "minLength": 1
                            },
                            "@ondc/org/provider_name": {
                                "id": "retail_bpp_on_update_message_21",
                                "type": "string",
                                "optional": true,
                                "minLength": 1
                            },
                            "end": {
                                "id": "retail_bpp_on_update_message_22",
                                "type": "object",
                                "properties": {
                                    "contact": {
                                        "id": "retail_bpp_on_update_message_23",
                                        "type": "object",
                                        "properties": {
                                            "email": {
                                                "id": "retail_bpp_on_update_message_24",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "phone": {
                                                "id": "retail_bpp_on_update_message_25",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "instructions": {
                                        "id": "retail_bpp_on_update_message_26",
                                        "type": "object",
                                        "properties": {
                                            "code": {
                                                "id": "retail_bpp_on_update_message_27",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "images": {
                                                "id": "retail_bpp_on_update_message_28",
                                                "type": "array",
                                                "minItems": 1,
                                                "element": {
                                                    "id": "retail_bpp_on_update_message_29",
                                                    "type": "string",
                                                    "minLength": 1
                                                }
                                            },
                                            "long_desc": {
                                                "id": "retail_bpp_on_update_message_30",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "name": {
                                                "id": "retail_bpp_on_update_message_31",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "short_desc": {
                                                "id": "retail_bpp_on_update_message_32",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "location": {
                                        "id": "retail_bpp_on_update_message_33",
                                        "type": "object",
                                        "properties": {
                                            "address": {
                                                "id": "retail_bpp_on_update_message_34",
                                                "type": "object",
                                                "properties": {
                                                    "area_code": {
                                                        "id": "retail_bpp_on_update_message_35",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "building": {
                                                        "id": "retail_bpp_on_update_message_36",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "city": {
                                                        "id": "retail_bpp_on_update_message_37",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "country": {
                                                        "id": "retail_bpp_on_update_message_38",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "locality": {
                                                        "id": "retail_bpp_on_update_message_39",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "name": {
                                                        "id": "retail_bpp_on_update_message_40",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "state": {
                                                        "id": "retail_bpp_on_update_message_41",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "gps": {
                                                "id": "retail_bpp_on_update_message_42",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "person": {
                                        "id": "retail_bpp_on_update_message_43",
                                        "type": "object",
                                        "properties": {
                                            "name": {
                                                "id": "retail_bpp_on_update_message_44",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "time": {
                                        "id": "retail_bpp_on_update_message_45",
                                        "type": "object",
                                        "properties": {
                                            "range": {
                                                "id": "retail_bpp_on_update_message_46",
                                                "type": "object",
                                                "properties": {
                                                    "end": {
                                                        "id": "retail_bpp_on_update_message_47",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "start": {
                                                        "id": "retail_bpp_on_update_message_48",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "timestamp": {
                                                "id": "retail_bpp_on_update_message_49",
                                                "type": "string",
                                                "minLength": 1
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
                                                        "state": {
                                                            "type": "object",
                                                            "properties": {
                                                                "descriptor": {
                                                                    "type": "object",
                                                                    "properties": {
                                                                        "code": {
                                                                            "const": "Order-delivered"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "then": [
                                                    "contact",
                                                    "location",
                                                    "instruction",
                                                    "person",
                                                    "time"
                                                ]
                                            },
                                            {
                                                "if": {
                                                    "properties": {
                                                        "type": "params",
                                                        "state": {
                                                            "type": "object",
                                                            "properties": {
                                                                "descriptor": {
                                                                    "type": "object",
                                                                    "properties": {
                                                                        "code": {
                                                                            "const": "Pending"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "then": [
                                                    "contact",
                                                    "location",
                                                    "instruction",
                                                    "person"
                                                ]
                                            }

                                        ]
                                    }
                                }

                            },
                            "id": {
                                "id": "retail_bpp_on_update_message_50",
                                "type": "string",
                                "minLength": 1
                            },
                            "start": {
                                "id": "retail_bpp_on_update_message_51",
                                "type": "object",
                                "properties": {
                                    "contact": {
                                        "id": "retail_bpp_on_update_message_52",
                                        "type": "object",
                                        "properties": {
                                            "email": {
                                                "id": "retail_bpp_on_update_message_53",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "phone": {
                                                "id": "retail_bpp_on_update_message_54",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "instructions": {
                                        "id": "retail_bpp_on_update_message_55",
                                        "type": "object",
                                        "optional": true,
                                        "properties": {
                                            "code": {
                                                "id": "retail_bpp_on_update_message_56",
                                                "type": "string",
                                                "minLength": 1,
                                                "optional": true,
                                            },
                                            "images": {
                                                "id": "retail_bpp_on_update_message_57",
                                                "type": "array",
                                                "minItems": 1,
                                                "optional": true,
                                                "element": {
                                                    "id": "retail_bpp_on_update_message_58",
                                                    "type": "string",
                                                    "minLength": 1
                                                }
                                            },
                                            "long_desc": {
                                                "id": "retail_bpp_on_update_message_59",
                                                "type": "string",
                                                "minLength": 1,
                                                "optional": true,
                                            },
                                            "name": {
                                                "id": "retail_bpp_on_update_message_60",
                                                "type": "string",
                                                "minLength": 1,
                                                "optional": true,
                                            },
                                            "short_desc": {
                                                "id": "retail_bpp_on_update_message_61",
                                                "type": "string",
                                                "minLength": 1,
                                                "optional": true,
                                            }
                                        }
                                    },
                                    "location": {
                                        "id": "retail_bpp_on_update_message_62",
                                        "type": "object",
                                        "properties": {
                                            "address": {
                                                "id": "retail_bpp_on_update_message_63",
                                                "type": "object",
                                                "properties": {
                                                    "area_code": {
                                                        "id": "retail_bpp_on_update_message_64",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "city": {
                                                        "id": "retail_bpp_on_update_message_65",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "locality": {
                                                        "id": "retail_bpp_on_update_message_66",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "state": {
                                                        "id": "retail_bpp_on_update_message_67",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "descriptor": {
                                                "id": "retail_bpp_on_update_message_68",
                                                "type": "object",
                                                "properties": {
                                                    "name": {
                                                        "id": "retail_bpp_on_update_message_69",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "gps": {
                                                "id": "retail_bpp_on_update_message_70",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "id": {
                                                "id": "retail_bpp_on_update_message_71",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "time": {
                                        "id": "retail_bpp_on_update_message_72",
                                        "type": "object",
                                        "properties": {
                                            "range": {
                                                "id": "retail_bpp_on_update_message_73",
                                                "type": "object",
                                                "properties": {
                                                    "end": {
                                                        "id": "retail_bpp_on_update_message_74",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "start": {
                                                        "id": "retail_bpp_on_update_message_75",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "timestamp": {
                                                "id": "retail_bpp_on_update_message_76",
                                                "type": "string",
                                                "minLength": 1,
                                                "optional": true,
                                            }
                                        }
                                    }
                                }
                            },
                            "state": {
                                "id": "retail_bpp_on_update_message_77",
                                "type": "object",
                                "properties": {
                                    "descriptor": {
                                        "id": "retail_bpp_on_update_message_78",
                                        "type": "object",
                                        "properties": {
                                            "code": {
                                                "id": "retail_bpp_on_update_message_79",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    }
                                }
                            },
                            "tags": {
                                "id": "retail_bpp_on_update_message_80",
                                "type": "array",
                                "minItems": 1,
                                "optional": true,
                                "element": {
                                    "id": "retail_bpp_on_update_message_81",
                                    "type": "object",
                                    "properties": {
                                        "code": {
                                            "id": "retail_bpp_on_update_message_82",
                                            "type": "string",
                                            "minLength": 1
                                        },
                                        "list": {
                                            "id": "retail_bpp_on_update_message_83",
                                            "type": "array",
                                            "minItems": 1,
                                            "element": {
                                                "id": "retail_bpp_on_update_message_84",
                                                "type": "object",
                                                "properties": {
                                                    "code": {
                                                        "id": "retail_bpp_on_update_message_85",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "value": {
                                                        "id": "retail_bpp_on_update_message_86",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "tracking": {
                                "id": "retail_bpp_on_update_message_87",
                                "type": "boolean",
                                "enum": [true, false]
                            },
                            "type": {
                                "id": "retail_bpp_on_update_message_88",
                                "type": "string",
                                "minLength": 1
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
                                                "type": {
                                                    "const": "Delivery"
                                                }
                                            }
                                        },
                                        "then": [
                                            "@ondc/org/provider_name",
                                            "@ondc/org/TAT",
                                            "end",
                                            "id",
                                            "start",
                                            "state",
                                            "tags",
                                            "tracking",
                                            "type"
                                        ]
                                    },
                                    {
                                        "if": {
                                            "properties": {
                                                "type": "params",
                                                "type": {
                                                    "const": "Return"
                                                }
                                            }
                                        },
                                        "then": [
                                            "@ondc/org/provider_name",
                                            "id",
                                            "state",
                                            "tags",
                                            "type"
                                        ]
                                    },
                                    {
                                        "if": {
                                            "properties": {
                                                "type": "params",
                                                "type": {
                                                    "const": "Cancel"
                                                }
                                            }
                                        },
                                        "then": [
                                            "@ondc/org/provider_name",
                                            "id",
                                            "state",
                                            "tags",
                                            "type"
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "id": {
                    "id": "retail_bpp_on_update_message_89",
                    "type": "string",
                    "minLength": 1
                },
                "items": {
                    "id": "retail_bpp_on_update_message_90",
                    "type": "array",
                    "minItems": 1,
                    "element": {
                        "id": "retail_bpp_on_update_message_91",
                        "type": "object",
                        "properties": {
                            "fulfillment_id": {
                                "id": "retail_bpp_on_update_message_92",
                                "type": "string",
                                "minLength": 1
                            },
                            "id": {
                                "id": "retail_bpp_on_update_message_93",
                                "type": "string",
                                "minLength": 1
                            },
                            "quantity": {
                                "id": "retail_bpp_on_update_message_94",
                                "type": "object",
                                "properties": {
                                    "count": {
                                        "id": "retail_bpp_on_update_message_95",
                                        "type": "number"
                                    }
                                }
                            }
                        }
                    }
                },
                "payment": {
                    "id": "retail_bpp_on_update_message_96",
                    "type": "object",
                    "properties": {
                        "@ondc/org/buyer_app_finder_fee_amount": {
                            "id": "retail_bpp_on_update_message_97",
                            "type": "string",
                            "minLength": 1
                        },
                        "@ondc/org/buyer_app_finder_fee_type": {
                            "id": "retail_bpp_on_update_message_98",
                            "type": "string",
                            "minLength": 1
                        },
                        "@ondc/org/settlement_details": {
                            "id": "retail_bpp_on_update_message_99",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_update_message_100",
                                "type": "object",
                                "properties": {
                                    "bank_name": {
                                        "id": "retail_bpp_on_update_message_101",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "beneficiary_name": {
                                        "id": "retail_bpp_on_update_message_102",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "branch_name": {
                                        "id": "retail_bpp_on_update_message_103",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_bank_account_no": {
                                        "id": "retail_bpp_on_update_message_104",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_counterparty": {
                                        "id": "retail_bpp_on_update_message_105",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_ifsc_code": {
                                        "id": "retail_bpp_on_update_message_106",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_phase": {
                                        "id": "retail_bpp_on_update_message_107",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "settlement_type": {
                                        "id": "retail_bpp_on_update_message_108",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "upi_address": {
                                        "id": "retail_bpp_on_update_message_109",
                                        "type": "string",
                                        "minLength": 1
                                    }
                                }
                            }
                        },
                        "@ondc/org/settlement_basis": {
                            "id": "retail_bpp_on_update_message_157",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/settlement_window": {
                            "id": "retail_bpp_on_update_message_158",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "@ondc/org/withholding_amount": {
                            "id": "retail_bpp_on_update_message_159",
                            "type": "string",
                            "minLength": 1,
                            "optional": true
                        },
                        "collected_by": {
                            "id": "retail_bpp_on_update_message_110",
                            "type": "string",
                            "minLength": 1
                        },
                        "params": {
                            "id": "retail_bpp_on_update_message_111",
                            "type": "object",
                            "properties": {
                                "amount": {
                                    "id": "retail_bpp_on_update_message_112",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "currency": {
                                    "id": "retail_bpp_on_update_message_113",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "transaction_id": {
                                    "id": "retail_bpp_on_update_message_114",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "status": {
                            "id": "retail_bpp_on_update_message_115",
                            "type": "string",
                            "minLength": 1
                        },
                        "type": {
                            "id": "retail_bpp_on_update_message_116",
                            "type": "string",
                            "minLength": 1
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
                                            "flow": {
                                                "const": [
                                                    "RET_1b"
                                                ]
                                            }
                                        }
                                    },
                                    "then": [
                                        "type",
                                        "status",
                                        "collected_by",
                                        "@ondc/org/buyer_app_finder_fee_type",
                                        "@ondc/org/buyer_app_finder_fee_amount",
                                        "@ondc/org/settlement_basis",
                                        "@ondc/org/settlement_window",
                                        "@ondc/org/withholding_amount"
                                    ]
                                },
                                {
                                    "if": {
                                        "properties": {
                                            "type": "params",
                                            "flow": {
                                                "const": [
                                                    "RET_1",
                                                    "RET_3",
                                                    "RET_4",
                                                    "RET_4b",
                                                    "RET_4c",
                                                    "RET_5",
                                                    "RET_5b",
                                                    "RET_6",
                                                    "RET_7",
                                                    "RET_8",
                                                    "RET_9",
                                                    "RET_10",
                                                    "RET_11",
                                                    "RET_12",
                                                    "RET_13",
                                                    "RET_14",
                                                    "RET_15"
                                                ]
                                            }
                                        }
                                    },
                                    "then": [
                                        "type",
                                        "status",
                                        "params",
                                        "collected_by",
                                        "@ondc/org/buyer_app_finder_fee_type",
                                        "@ondc/org/buyer_app_finder_fee_amount",
                                        "@ondc/org/settlement_details",
                                        "@ondc/org/settlement_basis",
                                        "@ondc/org/settlement_window",
                                        "@ondc/org/withholding_amount"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "provider": {
                    "id": "retail_bpp_on_update_message_117",
                    "type": "object",
                    "properties": {
                        "id": {
                            "id": "retail_bpp_on_update_message_118",
                            "type": "string",
                            "minLength": 1
                        },
                        "locations": {
                            "id": "retail_bpp_on_update_message_119",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_update_message_120",
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "id": "retail_bpp_on_update_message_121",
                                        "type": "string",
                                        "minLength": 1
                                    }
                                }
                            }
                        }
                    }
                },
                "quote": {
                    "id": "retail_bpp_on_update_message_122",
                    "type": "object",
                    "properties": {
                        "price": {
                            "id": "retail_bpp_on_update_message_123",
                            "type": "object",
                            "properties": {
                                "currency": {
                                    "id": "retail_bpp_on_update_message_124",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "value": {
                                    "id": "retail_bpp_on_update_message_125",
                                    "type": "string",
                                    "minLength": 1,
                                    "compliance": "price",
                                    "errorMessage": "should have two places of decimal"
                                }
                            }
                        },
                        "breakup": {
                            "id": "retail_bpp_on_update_message_126",
                            "type": "array",
                            "minItems": 1,
                            "element": {
                                "id": "retail_bpp_on_update_message_127",
                                "type": "object",
                                "properties": {
                                    "@ondc/org/item_id": {
                                        "id": "retail_bpp_on_update_message_128",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "title": {
                                        "id": "retail_bpp_on_update_message_129",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "@ondc/org/item_quantity": {
                                        "id": "retail_bpp_on_update_message_130",
                                        "type": "object",
                                        "properties": {
                                            "count": {
                                                "id": "retail_bpp_on_update_message_131",
                                                "type": "number"
                                            }
                                        }
                                    },
                                    "@ondc/org/title_type": {
                                        "id": "retail_bpp_on_update_message_132",
                                        "type": "string",
                                        "minLength": 1
                                    },
                                    "price": {
                                        "id": "retail_bpp_on_update_message_133",
                                        "type": "object",
                                        "properties": {
                                            "currency": {
                                                "id": "retail_bpp_on_update_message_134",
                                                "type": "string",
                                                "minLength": 1
                                            },
                                            "value": {
                                                "id": "retail_bpp_on_update_message_135",
                                                "type": "string",
                                                "minLength": 1
                                            }
                                        }
                                    },
                                    "item": {
                                        "id": "retail_bpp_on_update_message_136",
                                        "type": "object",
                                        "properties": {
                                            "parent_item_id": {
                                                "id": "retail_bpp_on_update_message_137",
                                                "type": "string"
                                            },
                                            "price": {
                                                "id": "retail_bpp_on_update_message_138",
                                                "type": "object",
                                                "properties": {
                                                    "currency": {
                                                        "id": "retail_bpp_on_update_message_139",
                                                        "type": "string",
                                                        "minLength": 1
                                                    },
                                                    "value": {
                                                        "id": "retail_bpp_on_update_message_140",
                                                        "type": "string",
                                                        "minLength": 1
                                                    }
                                                }
                                            },
                                            "tags": {
                                                "id": "retail_bpp_on_update_message_141",
                                                "type": "array",
                                                "element": {
                                                    "id": "retail_bpp_on_update_message_142",
                                                    "type": "object",
                                                    "properties": {
                                                        "code": {
                                                            "id": "retail_bpp_on_update_message_143",
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
                                                            "id": "retail_bpp_on_update_message_144",
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
                                                                                    "id": "retail_bpp_on_update_message_145",
                                                                                    "type": "string",
                                                                                    "enum": ["type"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_update_message_148",
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
                                                                                    "id": "retail_bpp_on_update_message_149",
                                                                                    "type": "string",
                                                                                    "enum": ["id"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_update_message_150",
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
                                                                                    "id": "retail_bpp_on_update_message_151",
                                                                                    "type": "string",
                                                                                    "enum": ["country"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_update_message_152",
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
                                                                                    "id": "retail_bpp_on_update_message_153",
                                                                                    "type": "string",
                                                                                    "enum": ["veg"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_update_message_154",
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
                                                                                    "id": "retail_bpp_on_update_message_155",
                                                                                    "type": "string",
                                                                                    "enum": ["default"]
                                                                                },
                                                                                "value": {
                                                                                    "id": "retail_bpp_on_update_message_156",
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
                            "id": "retail_bpp_on_update_message_151",
                            "type": "string",
                            "minLength": 1
                        }
                    }
                },
                "state": {
                    "id": "retail_bpp_on_update_message_146",
                    "type": "string",
                    "minLength": 1
                },
                "updated_at": {
                    "id": "retail_bpp_on_update_message_147",
                    "type": "string",
                    "minLength": 1,
                    "format": "rfc3339-date-time",
                    "errorMessage": "Time must be RFC3339 UTC timestamp format."
                }
            }
        }
    },
    "required": ["order"]
}
