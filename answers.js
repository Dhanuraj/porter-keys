const answers = {
    2: "<span style='color: red;  '>Copy & Past below line in Zingtree </span> \n" +
    "Enquiry - Booking Details/ Partner Details",
    3: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \n"+ "NEDD TO CONFIRM ORALLY",
    4: "<span style='color: red;'>Read this  </span>\n A surge charge is an additional fee or increased pricing applied to a product or service during periods of high demand or limited availability.",
    5: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nChanges in Order Requirement - Location Changes",
    6: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nCancellation - PNM Order",
    7: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nChanges in Order Requirement - Location Changes",
    8: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nDelay",
    9: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nChanges in Order Requirement - Reschedule/ Change Date & Time",
    10: "<span style='color: red;'>Read this </span> \n Sir/Madam, your order involves transportation from one state to another. Therefore, you are required to pay 80% of the amount at the pickup location and the remaining 20% at the drop location.",
    11: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nVendor Rejects the Order",
    12: "<span style='color: red;'>Copy & Past below line in Zingtree</span>  \nVendor Rejects the Order",
    13: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nSupervisor Reject Order - PNM",
    14: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nService Related - Not Enough Packing Materials",
    15: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nUnable to find Customer's Location (Pickup/Drop)",
    16: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nCustomer/Partner/Supervisor Unreachable",
    17: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nChanges in Order Requirement - Changes in Materials/ Extra Items",
    18: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nService Related - Wrong vehicle assigned",
    19: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nService Related - Wrong vehicle assigned",
    20: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nChanges in Order Requirement - Heavy/ Oversize Items - PNM",
    // 21: `1️⃣ Connect the Call – This is regarding an update on the trip.
    //      2️⃣ Inform the Partner – The customer will not pay any fuel charges.
    //      3️⃣ Clarify Responsibility – You need to arrange the fuel on your own.
    //      4️⃣ Confirm Understanding – Please confirm you understand.`,
    21: "<span style='color: red;'>Do following Step</span> <br> <br>"+
        "1️⃣ Connect the Call – This is regarding an update on the trip. \n" +
        "2️⃣ Inform the Partner – The customer will not pay any fuel charges. \n" +
        "3️⃣ Clarify Responsibility – You need to arrange the fuel on your own. \n" +
        "4️⃣ Confirm Understanding – Please confirm you understand.",
    
    22: "<span style='color: red;'>Copy & Past below line in Zingtree </span>  \nService Related - Behavior/Hygeine Issues",
    23: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nService Related - Behavior/Hygeine Issues",
    24: "<span style='color: red;'>Copy & Past below line in Zingtree</span>  \nCancellation - PNM Order",
    25: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nChanges in Order Requirement - Floor Change",
    26: "<span style='color: Red;'>Inform - </span>Sir/madam, if you want to keep the carton boxes after shifting, you will need to pay ₹60 per box.",
    27: "<span style='color: Red;'>Inform - </span>kindly inform to customer in case if customer wants to keep the carton boxes after shifting means customer need to pay 60 rs per box",
    28: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nPayment Related - Partner/Supervisor requesting for cash payment",
    29: "<span style='color: red;'> Do this - </span>connect with the customer over conference call and inform them that \n"+
        "<span style='color: red;'> and inform- </span>sir/madam Due to no entry restriction, there will be a delay in the delivery of goods.",

    30: "NA",
    31: "<span style='color: red;'> Do this - </span>\n" +
        "1) First, confirm the order details, then make a conference call to the customer.\n" +
        "2) Check whether the customer has added any amount to the wallet and if they want to pay through the wallet.\n" +
        "3) If yes, keep the ticket open with clear comments.",


    32: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nPayment Related - Changes in Invoice/ Add GST details",
    33: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nService Related - Goods Damage / Missing / Stolen / Good Left in Vehicle",
    34: "<span style='color: red;'>Inform- </span>Sorry for the inconvenience, sir/madam. In an LBR order, we cannot provide packing services. If you need packing services, you can choose the Packers and Movers option, sir/madam.",
    35: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nEnquiry - Feedback link not received",
    36: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nPayment Related - Customer is refusing to pay/ Underpayment",
    37: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nCancellation - PNM Order",
    38: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nunion",
    39: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nCustomer/Partner/Supervisor Unreachable",
    40: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nSupervisor Reject Order - PNM",
    41: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nSupervisor Reject Order - PNM",
    42: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nService Related - Wrong vehicle assigned",
    43: "<span style='color: Red;'>Inform - </span>Sir/Madam, in an LBR order, you will get one vehicle, one laborer, and a driver (who will also act as a helper). A 7-feet vehicle will arrive at your location, and you can load up to **750 kg overall. However, each individual item should weigh less than 50 kg.",


    44: "<span style='color: Red;'>Say this  - </span>I am extremely sorry for the inconvenience, Sir/Madam. Rope pulling is not provided at the drop location in PTL orders; it is only available at the pickup location",


    45: "<span style='color: Red;'>Say this  - </span> Sir/Madam,we are so sorry to inform you, we cannot provide specific charges for this service. If you wish to avail this, you can add the service, and the standard charges will be included in the total amount.",


    46: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nDELAY - PNM",
    47: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nRequire Add-on > Services",
    48: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nChanges in Order Requirement - Parking to Lift Distance",
    49: "LBR orders with Order Source: PORTER_ASSIST – Toll charges are included in the quotation. connect con call the partner and inform the same no need to collect toll amount customer side.\nLBR orders with Order Source: CUSTOMER – Toll charges are not included in the quotation and must be paid separately by the customer.",
    50: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \ncancellation LBR",
    51: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \ndiscount",
    52: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\namount",
    53: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nService Related - Goods Damage / Missing / Stolen / Good Left in Vehicle completed order stage direct open ticket",
    54: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nService Related - Goods Damage / Missing / Stolen / Good Left in Vehicle",
    55: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nChanges in Order Requirement - Require Add-on Services",
    56: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nChanges in Order Requirement - Require Add-on Services",
    57: "<span style='color: Red;'>Say this - </span> Sorry for the inconvenience. Plants, filled gas cylinders (LPG), flammable items, and large glass materials are non-shiftable items.",


    58: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nCancellation - PNM Order IN THAT SELECT THE REASON EXYRA MATERIAL ON SAME QUOTATION",
    59: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nPayment Related - Tip Collected",
    60: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nChanges in Order Requirement - Add-on",
    61: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nChanges in Order Requirement - Lift Status Change",
    62: "(ENQUIRY NOR )\n<span style='color: Red;'>Say this - </span> Partner, as per availability, you will receive the order.</span><span style='color: Red;'>(raise ticket NOR) - </span>",
    63: "NEED TO CHECK IN ORDER DETAILS IF NO WAYPOINT ADDED MEANS U CAN INFORM THAT NO WAYPOINT IS ADDED HENCE UR NOT ABLE TO SEE ANY WAYPOINT IN UR APPLICATION",
    64: "<span style='color: Red;'>inform - </span> I am extremely sorry for the inconvenience, Sir/Madam. As of now, cancellations can only be done by customer care, and there is no option available in the Porter application.",


    65: "<span style='color: Red;'>inform - </span> I am extremely sorry for the inconvenience, Sir/Madam. We have stopped the pre-shifting carton delivery box service. On the shifting day, our partner will bring the carton boxes with them.",

    66: "All items such as furniture, kitchen items, etc., will be packed by Multi-layer packing.",
    67: "<span style='color: red;'>Say this - </span>Sorry for the inconvenience, Sir/Madam. In an LBR order, we cannot provide packing services. If you need packing services, you can choose the Packers and Movers option.",
    68: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nCancellation - LBR \nhttps://zingtree.com/preview/982283122?tree_id=982283122&is_preview=1#3",
    69: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nSupervisor Reject Order - PNM",
    70: "<span style='color: red;'>Copy & Past below line in Zingtree </span> \nSupervisor Reject Order - PNM",
    71: "<span style='color: Red;'>inform - </span> I am extremely sorry for the inconvenience, Sir/Madam. The discount code can only be applied at the time of placing the order. Once the order is placed, we cannot apply the discount.",

    72: "<span style='color: Red;'>inform - </span> Sir/Madam, as per the service, you have two options: **Single Layer** and **Multi-Layer** packing. You can choose Multi-Layer packing for electronic and fragile goods.",
    73: "<span style='color: Red;'>inform - </span> Payment Related - If the partner asks for more money or has collected an extra amount, you can inform the customer that the service only includes <b>installation and uninstallation</b>. If any extra materials like pipes, gas filling, wires, etc., are required, the customer needs to pay extra to the partner.",

    74: "<span style='color: Red;'>inform - </span> Sir/Madam, I am extremely sorry for the inconvenience. As of now, we are not providing any insurance for the goods being transported.",

    75: "<span style='color: Red;'>inform - </span> The **default** package will display the base price and include certain services: **Single-layer packing, Multi-layer packing, Unpacking and arrangement of big items, and Dismantling and reassembly of basic furniture",

    76: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\ncommission",
    77: "<span style='color: Red;'>inform - </span> Informed the partner that in LBR orders, we can load items where each item's weight does not exceed **50kg**, and the total weight should not exceed **750kg**.",
    78: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nSuspend - (raise ticket NOR) ",
    79: "<span style='color: Red;'>inform - </span> Sir, in Micro Shifting, the distance limit is **10 kilometers**, whereas in the other package, it is **20 kilometers**.",
    80: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nfeed back",
    81: "Sir as of now we are giving the service on 14 cities sir Ahmedabad , Bangalore , Coimbatore , Delhi , Indore , Hyderabad , Jaipur , Lucknow , Mumbai , Nagpur , Chennai , Surat , Pune , Kolkata",
    82: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\ndamage",
    83: "Inform the customer that we cannot provide specific charges for this service. If they wish to avail of this service, they can add it, and standard charges will be included in the total amount.",
    84: "<span style='color: red;'>Copy & Past below line in Zingtree  </span>\nChanges in Order Requirement - Require Add-on Services",
    85: "please dail this number 02244104444 after dialing press 1 your call has been connect to booking team , booking team will help you about your query  (-----No ticket raise - dispose - Booking call -----)"

};
