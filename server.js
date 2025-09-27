const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const numerosAutorizados = {
  "573046384844": "WA-605",
};

app.post("/api/v1/validate", (req, res) => {
  const { mo_no } = req.body;
  const deviceName = numerosAutorizados[mo_no];

  if (!deviceName) {
    return res.status(400).json({
      code: 40,
      message: "PHONE_NUMBER_DOES_NOT_MATCH_LICENSE",
      status: 400
    });
  }

  res.json({
    dData: {
      userDeviceData: {
        device_data: {
          skd_archive: false,
          skd_build_version: "1.0.6",
          skd_config: null,
          skd_created_at: "2024-04-07T09:50:14.619157+00:00",
          skd_device_id: "",
          skd_device_name: deviceName,
          skd_fk_sk_id: 6433,
          skd_id: 26444,
          skd_modified_at: "2024-04-07T09:50:14.619157+00:00",
          skd_removed_at: null,
          skd_removed_manual: false,
          skd_removed_manual_at: null,
          skd_wa_no: mo_no,
          skd_signature: ""
        },
        is_subscription: true,
        plan_type: "Premium",
        skey: "xxxx-xxxx-xxxx-xxxx-xxxx",
        sub_email: "example@example.com",
        sub_key: "xxxx-xxxx-xxxx-xxxx-xxxx",
        success: true,
        validate: {
          day_remaining: 9007199254740991,
          end_date: "2030-11-28T17:40:32-06:00",
          is_pro: true,
          life_time: false,
          sk_licence_key: "xxxx-xxxx-xxxx-xxxx-xxxx"
        }
      },
      userPurchaseStatus: "PREMIUM",
      userkeyuniquedata: {
        licence_key: "xxxx-xxxx-xxxx-xxxx-xxxx",
        uniqueId: "",
        version: "1.0.6"
      }
    },
    data: "License key is valid. Device added successfully.",
    message: "OK",
    status: 200
  });
});

app.listen(port, () => {
  console.log(`✅ Servidor de validación corriendo en http://localhost:${port}`);
});

ç


