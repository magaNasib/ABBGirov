import express from 'express';

const router = express.Router();


const pledgesData = [
  {
    customerCIF:"1234567",
    fullname:"Ismayil Hasanov Rashad",
    customerPledge:{
        colletralCode: "1234567",
        describe:"12345",
        pledgesValue:100.00,
        pledgedCurrency:"AZN",
        startDate:new Date("2023-01-21"),
        endDate:new Date("2033-01-21")
    },
    data:[
        {
            "productCode": "CKLL",
            deposit:[
                {
                    "branch": "120",
                    "reference": "12345",
                    "currency": "AZN"
                },
                {
                    "branch": "100",
                    "reference": "12346",
                    "currency": "USD"
                }
          
          
            ],
            questions: [
                {
                  key: 'propertyType',
                  value: 'Daşınmaz əmlakın növü',
                  type: 'select',
                  items: [
                    {
                      key: 'private',
                      value: 'Fərdi yaşayış evi'
                    },
                    {
                      key: 'apartment',
                      value: 'Mənzil'
                    }
                  ]
                },
                {
                  key: 'owner',
                  value: 'Mülkiyyətçi',
                  type: 'text',
                  items: [],
                  maxLenght: 60,
                  minLenght: 5
                },
                {
                  key: 'propertyDetail',
                  value: 'Əmlak - ümumi məlumat',
                  type: 'text',
                  items: [],
                  maxLenght: 60,
                  minLenght: 5
                },
                {
                  key: 'buildingCompany',
                  value: 'Tikinti şirkətinin adı',
                  type: 'text',
                  items: [],
                  maxLenght: 60,
                  minLenght: 5
                },
                {
                  key: 'city',
                  value: 'Şəhər',
                  type: 'select',
                  items: [
                    {
                      key: 'mainCity',
                      value: 'Baku'
                    },
                    {
                      key: 'secondCity',
                      value: 'Sumqayit'
                    }
                  ]
                },
                {
                  key: 'district',
                  value: 'Rayon',
                  type: 'select',
                  items: [
                    {
                      key: 'mainDistrict',
                      value: 'Qax'
                    },
                    {
                      key: 'secondDistrict',
                      value: 'Quba'
                    }
                  ]
                },
                {
                  key: 'municipality',
                  value: 'Bələdiyyə',
                  type: 'text',
                  items: [],
                  maxLenght: 60,
                  minLenght: 5
                },
                {
                  key: 'town/village',
                  value: 'Qəsəbə/Kənd',
                  type: 'text',
                  items: [],
                  maxLenght: 60,
                  minLenght: 5
                },
                {
                  key: 'construction-project',
                  value: 'Tikintinin layihəsi',
                  type: 'text',
                  items: [],
                  maxLenght: 60,
                  minLenght: 5
                },
                {
                  key: 'land-designation',
                  value: 'Torpaq təyinatı',
                  type: 'text',
                  items: [],
                  maxLenght: 60,
                  minLenght: 5
                }
              ]
        }
    ]
  }
]



router.post("")