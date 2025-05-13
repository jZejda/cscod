---
title: Custom label printing
description: how to create an order with custom label printing

head:
  - - meta
    - name: description
      content: how to create an order with custom label printing
  - - meta
    - name: keywords
      content: custom label printing order
      
editLink: true
outline: deep
lastUpdated: true
---

# Custom label printing

## Collection type

If the client wishes to print their own labels, which they will apply to the packages themselves and then hand over to the courier in a one-off or regular collection order, the `OCCASIONAL` type should be selected.

For one-off orders the `ONDEMAND` type is used. It denotes a one-off order from an address that may not be contractual. The courier will arrive at this address with a label ready, this will be used to label the package being transported.

---

**Pre-requisite to be able to create shipments with custom label printing**

- A shipping address with an active shipping service must be created under the user of the given `x-apikey`.
    - The address must be active
    - Contract carriers are registered to the delivery address (to be ensured automatically when creating the delivery address or additionally by contacting the specific carrier to)
    - regular collections can be scheduled at the address
- the customer must have an active contract with the possibility of payment on invoice

::: warning 💡 ORDER CREATION
**When calling the `create` method, you need to specify the following parameters:**

- payment on invoice
- collection type
- collection address ID
- code of the transport company registered at the collection address ID
:::

## Where do I check the details

I can check the details in **Shipment Manager** ([app.zaslad.cz](https://app.zaslat.cz)).

The customer must have a valid contract which I can check on the page `Overview` For my company I see the contract `Profi`, `Flexi` ... .

I can check the collection address on the page `Collections → Collection addresses`, or I can create a new collection address there. For each collection address, there is a **Carrier Settings** available,
which shows which carriers are active or scheduled for regular collection. The actual _ID of the collection address_ can be found in the brackets after the name of the collection address (_ID 123456789_).
You must use the specified **collection address ID** and the shipping company's text label in the API call.

### Export shipments from a shipping address with custom label printing

::: details Example `json` object call order create own print label {open}
```json
{
  "payment_type": "INVOICE", // [!code highlight] [!code focus]
  "currency": "CZK",
  "payer": {
    ...
  },
  "shipments": [
    {
      "from": { // [!code highlight] [!code focus]
        "id": 123654 // [!code highlight] [!code focus]
      }, // [!code highlight] [!code focus]
      "to": {
        .....
      },
      "type": "OCCASIONAL",// [!code highlight] [!code focus]
      "packages": [
        {
          .....
        }
      ],
      "carrier": "DPD", // [!code highlight] [!code focus]
      "currency": "CZK",
      "pickup_date": "2023-11-30",
    }
  ],
}
```
:::

**Necessary data of the create method call**

| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| `payment_type` | string | payment on invoice = `INVOICE` | Yes |
| `shipments.[].type` | string | occasional collection = `OCCASIONAL` | Yes |
| `shipments. [].from.id` | int | ID of active collection address | Yes |
| `shipments.[].carrier**` | string(20) | code of the transport company according to the [codebook](https://www.zaslat.cz/dokumentace/api#carriers) | Yes |

::: tip 💡 TIP
\* in the `from` object do not specify any other parameters except `id`

** the shipper must be activated on the given shipping address ID
:::

## How do I get a label

After the shipment export is complete, you will get the shipment identifier `tracking_number` based on which you can get the label according to [documentation](https://www.zaslat.cz/dokumentace/api). Labels can be obtained in bulk and from multiple different shipments. Within the API call you can specify various other parameters according to the label printer format etc.

In case of exporting a shipment with custom label printing, the label is still sent as an attachment to the email to the customer. In contrast to the API call, in the email you only receive the labels that are related to the packages of the shipment.