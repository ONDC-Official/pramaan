module.exports = {
    "id": "retail_bpp_on_info_message_25",
    "type": "object",
    "properties": {
        "info": {
            "id": "retail_bpp_on_info_message_24",
            "type": "object",
            "properties": {
                "type": {
                    "id": "retail_bpp_on_info_message_1",
                    "type": "string",
                    "minLength": 1
                },
                "entity": {
                    "id": "retail_bpp_on_info_message_23",
                    "type": "object",
                    "properties": {
                        "gst": {
                            "id": "retail_bpp_on_info_message_7",
                            "type": "object",
                            "properties": {
                                "legal_entity_name": {
                                    "id": "retail_bpp_on_info_message_2",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "business_address": {
                                    "id": "retail_bpp_on_info_message_3",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "city_code": {
                                    "id": "retail_bpp_on_info_message_4",
                                    "type": "array",
                                    "minItems": 1,
                                    "element": {
                                        "id": "retail_bpp_on_info_message_5",
                                        "type": "string",
                                        "minLength": 1
                                    }
                                },
                                "gst_no": {
                                    "id": "retail_bpp_on_info_message_6",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "pan": {
                            "id": "retail_bpp_on_info_message_11",
                            "type": "object",
                            "properties": {
                                "name_as_per_pan": {
                                    "id": "retail_bpp_on_info_message_8",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "pan_no": {
                                    "id": "retail_bpp_on_info_message_9",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "date_of_incorporation": {
                                    "id": "retail_bpp_on_info_message_10",
                                    "type": "string",
                                    "minLength": 1
                                }
                            }
                        },
                        "name_of_authorised_signatory": {
                            "id": "retail_bpp_on_info_message_12",
                            "type": "string",
                            "minLength": 1
                        },
                        "address_of_authorised_signatory": {
                            "id": "retail_bpp_on_info_message_13",
                            "type": "string",
                            "minLength": 1
                        },
                        "email_id": {
                            "id": "retail_bpp_on_info_message_14",
                            "type": "string",
                            "minLength": 1
                        },
                        "mobile_no": {
                            "id": "retail_bpp_on_info_message_15",
                            "type": "number"
                        },
                        "country": {
                            "id": "retail_bpp_on_info_message_16",
                            "type": "string",
                            "minLength": 1
                        },
                        "bank_details": {
                            "id": "retail_bpp_on_info_message_22",
                            "type": "object",
                            "properties": {
                                "account_no": {
                                    "id": "retail_bpp_on_info_message_17",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "ifsc_code": {
                                    "id": "retail_bpp_on_info_message_18",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "beneficiary_name": {
                                    "id": "retail_bpp_on_info_message_19",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "bank_name": {
                                    "id": "retail_bpp_on_info_message_20",
                                    "type": "string",
                                    "minLength": 1
                                },
                                "branch_name": {
                                    "id": "retail_bpp_on_info_message_21",
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