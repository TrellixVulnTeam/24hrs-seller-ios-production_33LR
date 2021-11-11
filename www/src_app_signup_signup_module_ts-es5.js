(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_signup_signup_module_ts"], {
    /***/
    62635:
    /*!*****************************************!*\
      !*** ./node_modules/validator/index.js ***!
      \*****************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;

      var _toDate = _interopRequireDefault(__webpack_require__(
      /*! ./lib/toDate */
      83686));

      var _toFloat = _interopRequireDefault(__webpack_require__(
      /*! ./lib/toFloat */
      97));

      var _toInt = _interopRequireDefault(__webpack_require__(
      /*! ./lib/toInt */
      69012));

      var _toBoolean = _interopRequireDefault(__webpack_require__(
      /*! ./lib/toBoolean */
      74416));

      var _equals = _interopRequireDefault(__webpack_require__(
      /*! ./lib/equals */
      36427));

      var _contains = _interopRequireDefault(__webpack_require__(
      /*! ./lib/contains */
      60471));

      var _matches = _interopRequireDefault(__webpack_require__(
      /*! ./lib/matches */
      24928));

      var _isEmail = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isEmail */
      55263));

      var _isURL = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isURL */
      15035));

      var _isMACAddress = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isMACAddress */
      93515));

      var _isIP = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isIP */
      34335));

      var _isIPRange = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isIPRange */
      55145));

      var _isFQDN = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isFQDN */
      34469));

      var _isDate = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isDate */
      97448));

      var _isBoolean = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isBoolean */
      42922));

      var _isLocale = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isLocale */
      1141));

      var _isAlpha = _interopRequireWildcard(__webpack_require__(
      /*! ./lib/isAlpha */
      94326));

      var _isAlphanumeric = _interopRequireWildcard(__webpack_require__(
      /*! ./lib/isAlphanumeric */
      47114));

      var _isNumeric = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isNumeric */
      98356));

      var _isPassportNumber = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isPassportNumber */
      53715));

      var _isPort = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isPort */
      65374));

      var _isLowercase = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isLowercase */
      11670));

      var _isUppercase = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isUppercase */
      94980));

      var _isIMEI = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isIMEI */
      1997));

      var _isAscii = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isAscii */
      1896));

      var _isFullWidth = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isFullWidth */
      17779));

      var _isHalfWidth = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isHalfWidth */
      23487));

      var _isVariableWidth = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isVariableWidth */
      61104));

      var _isMultibyte = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isMultibyte */
      86853));

      var _isSemVer = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isSemVer */
      68500));

      var _isSurrogatePair = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isSurrogatePair */
      79869));

      var _isInt = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isInt */
      33131));

      var _isFloat = _interopRequireWildcard(__webpack_require__(
      /*! ./lib/isFloat */
      30476));

      var _isDecimal = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isDecimal */
      82507));

      var _isHexadecimal = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isHexadecimal */
      75204));

      var _isOctal = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isOctal */
      54583));

      var _isDivisibleBy = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isDivisibleBy */
      60453));

      var _isHexColor = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isHexColor */
      71711));

      var _isRgbColor = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isRgbColor */
      83465));

      var _isHSL = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isHSL */
      28722));

      var _isISRC = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isISRC */
      20668));

      var _isIBAN = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isIBAN */
      28344));

      var _isBIC = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isBIC */
      53674));

      var _isMD = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isMD5 */
      3018));

      var _isHash = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isHash */
      87999));

      var _isJWT = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isJWT */
      92541));

      var _isJSON = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isJSON */
      47074));

      var _isEmpty = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isEmpty */
      53200));

      var _isLength = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isLength */
      88921));

      var _isByteLength = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isByteLength */
      88347));

      var _isUUID = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isUUID */
      71672));

      var _isMongoId = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isMongoId */
      48578));

      var _isAfter = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isAfter */
      33472));

      var _isBefore = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isBefore */
      52594));

      var _isIn = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isIn */
      48153));

      var _isCreditCard = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isCreditCard */
      42140));

      var _isIdentityCard = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isIdentityCard */
      36222));

      var _isEAN = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isEAN */
      65603));

      var _isISIN = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isISIN */
      86150));

      var _isISBN = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isISBN */
      99540));

      var _isISSN = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isISSN */
      25956));

      var _isTaxID = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isTaxID */
      20844));

      var _isMobilePhone = _interopRequireWildcard(__webpack_require__(
      /*! ./lib/isMobilePhone */
      25144));

      var _isEthereumAddress = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isEthereumAddress */
      69362));

      var _isCurrency = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isCurrency */
      49219));

      var _isBtcAddress = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isBtcAddress */
      83179));

      var _isISO = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isISO8601 */
      11415));

      var _isRFC = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isRFC3339 */
      6213));

      var _isISO31661Alpha = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isISO31661Alpha2 */
      95062));

      var _isISO31661Alpha2 = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isISO31661Alpha3 */
      6305));

      var _isBase = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isBase32 */
      26930));

      var _isBase2 = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isBase58 */
      6806));

      var _isBase3 = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isBase64 */
      97104));

      var _isDataURI = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isDataURI */
      55096));

      var _isMagnetURI = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isMagnetURI */
      7954));

      var _isMimeType = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isMimeType */
      26305));

      var _isLatLong = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isLatLong */
      18343));

      var _isPostalCode = _interopRequireWildcard(__webpack_require__(
      /*! ./lib/isPostalCode */
      23379));

      var _ltrim = _interopRequireDefault(__webpack_require__(
      /*! ./lib/ltrim */
      76618));

      var _rtrim = _interopRequireDefault(__webpack_require__(
      /*! ./lib/rtrim */
      4823));

      var _trim = _interopRequireDefault(__webpack_require__(
      /*! ./lib/trim */
      14442));

      var _escape = _interopRequireDefault(__webpack_require__(
      /*! ./lib/escape */
      45134));

      var _unescape = _interopRequireDefault(__webpack_require__(
      /*! ./lib/unescape */
      46468));

      var _stripLow = _interopRequireDefault(__webpack_require__(
      /*! ./lib/stripLow */
      59830));

      var _whitelist = _interopRequireDefault(__webpack_require__(
      /*! ./lib/whitelist */
      90341));

      var _blacklist = _interopRequireDefault(__webpack_require__(
      /*! ./lib/blacklist */
      41513));

      var _isWhitelisted = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isWhitelisted */
      99651));

      var _normalizeEmail = _interopRequireDefault(__webpack_require__(
      /*! ./lib/normalizeEmail */
      52446));

      var _isSlug = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isSlug */
      62224));

      var _isLicensePlate = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isLicensePlate */
      96105));

      var _isStrongPassword = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isStrongPassword */
      10339));

      var _isVAT = _interopRequireDefault(__webpack_require__(
      /*! ./lib/isVAT */
      96578));

      function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function") return null;
        var cache = new WeakMap();

        _getRequireWildcardCache = function _getRequireWildcardCache() {
          return cache;
        };

        return cache;
      }

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }

        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return {
            "default": obj
          };
        }

        var cache = _getRequireWildcardCache();

        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }

        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }

        newObj["default"] = obj;

        if (cache) {
          cache.set(obj, newObj);
        }

        return newObj;
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var version = '13.6.0';
      var validator = {
        version: version,
        toDate: _toDate["default"],
        toFloat: _toFloat["default"],
        toInt: _toInt["default"],
        toBoolean: _toBoolean["default"],
        equals: _equals["default"],
        contains: _contains["default"],
        matches: _matches["default"],
        isEmail: _isEmail["default"],
        isURL: _isURL["default"],
        isMACAddress: _isMACAddress["default"],
        isIP: _isIP["default"],
        isIPRange: _isIPRange["default"],
        isFQDN: _isFQDN["default"],
        isBoolean: _isBoolean["default"],
        isIBAN: _isIBAN["default"],
        isBIC: _isBIC["default"],
        isAlpha: _isAlpha["default"],
        isAlphaLocales: _isAlpha.locales,
        isAlphanumeric: _isAlphanumeric["default"],
        isAlphanumericLocales: _isAlphanumeric.locales,
        isNumeric: _isNumeric["default"],
        isPassportNumber: _isPassportNumber["default"],
        isPort: _isPort["default"],
        isLowercase: _isLowercase["default"],
        isUppercase: _isUppercase["default"],
        isAscii: _isAscii["default"],
        isFullWidth: _isFullWidth["default"],
        isHalfWidth: _isHalfWidth["default"],
        isVariableWidth: _isVariableWidth["default"],
        isMultibyte: _isMultibyte["default"],
        isSemVer: _isSemVer["default"],
        isSurrogatePair: _isSurrogatePair["default"],
        isInt: _isInt["default"],
        isIMEI: _isIMEI["default"],
        isFloat: _isFloat["default"],
        isFloatLocales: _isFloat.locales,
        isDecimal: _isDecimal["default"],
        isHexadecimal: _isHexadecimal["default"],
        isOctal: _isOctal["default"],
        isDivisibleBy: _isDivisibleBy["default"],
        isHexColor: _isHexColor["default"],
        isRgbColor: _isRgbColor["default"],
        isHSL: _isHSL["default"],
        isISRC: _isISRC["default"],
        isMD5: _isMD["default"],
        isHash: _isHash["default"],
        isJWT: _isJWT["default"],
        isJSON: _isJSON["default"],
        isEmpty: _isEmpty["default"],
        isLength: _isLength["default"],
        isLocale: _isLocale["default"],
        isByteLength: _isByteLength["default"],
        isUUID: _isUUID["default"],
        isMongoId: _isMongoId["default"],
        isAfter: _isAfter["default"],
        isBefore: _isBefore["default"],
        isIn: _isIn["default"],
        isCreditCard: _isCreditCard["default"],
        isIdentityCard: _isIdentityCard["default"],
        isEAN: _isEAN["default"],
        isISIN: _isISIN["default"],
        isISBN: _isISBN["default"],
        isISSN: _isISSN["default"],
        isMobilePhone: _isMobilePhone["default"],
        isMobilePhoneLocales: _isMobilePhone.locales,
        isPostalCode: _isPostalCode["default"],
        isPostalCodeLocales: _isPostalCode.locales,
        isEthereumAddress: _isEthereumAddress["default"],
        isCurrency: _isCurrency["default"],
        isBtcAddress: _isBtcAddress["default"],
        isISO8601: _isISO["default"],
        isRFC3339: _isRFC["default"],
        isISO31661Alpha2: _isISO31661Alpha["default"],
        isISO31661Alpha3: _isISO31661Alpha2["default"],
        isBase32: _isBase["default"],
        isBase58: _isBase2["default"],
        isBase64: _isBase3["default"],
        isDataURI: _isDataURI["default"],
        isMagnetURI: _isMagnetURI["default"],
        isMimeType: _isMimeType["default"],
        isLatLong: _isLatLong["default"],
        ltrim: _ltrim["default"],
        rtrim: _rtrim["default"],
        trim: _trim["default"],
        escape: _escape["default"],
        unescape: _unescape["default"],
        stripLow: _stripLow["default"],
        whitelist: _whitelist["default"],
        blacklist: _blacklist["default"],
        isWhitelisted: _isWhitelisted["default"],
        normalizeEmail: _normalizeEmail["default"],
        toString: toString,
        isSlug: _isSlug["default"],
        isStrongPassword: _isStrongPassword["default"],
        isTaxID: _isTaxID["default"],
        isDate: _isDate["default"],
        isLicensePlate: _isLicensePlate["default"],
        isVAT: _isVAT["default"]
      };
      var _default = validator;
      exports["default"] = _default;
      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    50395:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/alpha.js ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.commaDecimal = exports.dotDecimal = exports.farsiLocales = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
      var alpha = {
        'en-US': /^[A-Z]+$/i,
        'az-AZ': /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
        'bg-BG': /^[А-Я]+$/i,
        'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
        'da-DK': /^[A-ZÆØÅ]+$/i,
        'de-DE': /^[A-ZÄÖÜß]+$/i,
        'el-GR': /^[Α-ώ]+$/i,
        'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
        'fa-IR': /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
        'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
        'nb-NO': /^[A-ZÆØÅ]+$/i,
        'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
        'nn-NO': /^[A-ZÆØÅ]+$/i,
        'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
        'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
        'pt-PT': /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
        'ru-RU': /^[А-ЯЁ]+$/i,
        'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
        'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
        'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
        'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
        'sv-SE': /^[A-ZÅÄÖ]+$/i,
        'th-TH': /^[ก-๐\s]+$/i,
        'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
        'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
        'vi-VN': /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
        'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
        ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
        he: /^[א-ת]+$/,
        fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i
      };
      exports.alpha = alpha;
      var alphanumeric = {
        'en-US': /^[0-9A-Z]+$/i,
        'az-AZ': /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
        'bg-BG': /^[0-9А-Я]+$/i,
        'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
        'da-DK': /^[0-9A-ZÆØÅ]+$/i,
        'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
        'el-GR': /^[0-9Α-ω]+$/i,
        'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
        'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
        'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
        'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
        'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
        'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
        'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
        'pt-PT': /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
        'ru-RU': /^[0-9А-ЯЁ]+$/i,
        'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
        'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
        'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
        'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
        'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
        'th-TH': /^[ก-๙\s]+$/i,
        'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
        'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
        'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
        'vi-VN': /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
        ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
        he: /^[0-9א-ת]+$/,
        fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i
      };
      exports.alphanumeric = alphanumeric;
      var decimal = {
        'en-US': '.',
        ar: '٫'
      };
      exports.decimal = decimal;
      var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];
      exports.englishLocales = englishLocales;

      for (var locale, i = 0; i < englishLocales.length; i++) {
        locale = "en-".concat(englishLocales[i]);
        alpha[locale] = alpha['en-US'];
        alphanumeric[locale] = alphanumeric['en-US'];
        decimal[locale] = decimal['en-US'];
      } // Source: http://www.localeplanet.com/java/


      var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];
      exports.arabicLocales = arabicLocales;

      for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
        _locale = "ar-".concat(arabicLocales[_i]);
        alpha[_locale] = alpha.ar;
        alphanumeric[_locale] = alphanumeric.ar;
        decimal[_locale] = decimal.ar;
      }

      var farsiLocales = ['IR', 'AF'];
      exports.farsiLocales = farsiLocales;

      for (var _locale2, _i2 = 0; _i2 < farsiLocales.length; _i2++) {
        _locale2 = "fa-".concat(farsiLocales[_i2]);
        alphanumeric[_locale2] = alphanumeric.fa;
        decimal[_locale2] = decimal.ar;
      } // Source: https://en.wikipedia.org/wiki/Decimal_mark


      var dotDecimal = ['ar-EG', 'ar-LB', 'ar-LY'];
      exports.dotDecimal = dotDecimal;
      var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-ZM', 'es-ES', 'fr-CA', 'fr-FR', 'id-ID', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA', 'vi-VN'];
      exports.commaDecimal = commaDecimal;

      for (var _i3 = 0; _i3 < dotDecimal.length; _i3++) {
        decimal[dotDecimal[_i3]] = decimal['en-US'];
      }

      for (var _i4 = 0; _i4 < commaDecimal.length; _i4++) {
        decimal[commaDecimal[_i4]] = ',';
      }

      alpha['fr-CA'] = alpha['fr-FR'];
      alphanumeric['fr-CA'] = alphanumeric['fr-FR'];
      alpha['pt-BR'] = alpha['pt-PT'];
      alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
      decimal['pt-BR'] = decimal['pt-PT']; // see #862

      alpha['pl-Pl'] = alpha['pl-PL'];
      alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
      decimal['pl-Pl'] = decimal['pl-PL']; // see #1455

      alpha['fa-AF'] = alpha.fa;
      /***/
    },

    /***/
    41513:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/blacklist.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = blacklist;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function blacklist(str, chars) {
        (0, _assertString["default"])(str);
        return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    60471:
    /*!************************************************!*\
      !*** ./node_modules/validator/lib/contains.js ***!
      \************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = contains;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _toString = _interopRequireDefault(__webpack_require__(
      /*! ./util/toString */
      33610));

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var defaulContainsOptions = {
        ignoreCase: false
      };

      function contains(str, elem, options) {
        (0, _assertString["default"])(str);
        options = (0, _merge["default"])(options, defaulContainsOptions);
        return options.ignoreCase ? str.toLowerCase().indexOf((0, _toString["default"])(elem).toLowerCase()) >= 0 : str.indexOf((0, _toString["default"])(elem)) >= 0;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    36427:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/equals.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = equals;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function equals(str, comparison) {
        (0, _assertString["default"])(str);
        return str === comparison;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    45134:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/escape.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = escape;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function escape(str) {
        (0, _assertString["default"])(str);
        return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    33472:
    /*!***********************************************!*\
      !*** ./node_modules/validator/lib/isAfter.js ***!
      \***********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isAfter;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _toDate = _interopRequireDefault(__webpack_require__(
      /*! ./toDate */
      83686));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isAfter(str) {
        var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
        (0, _assertString["default"])(str);
        var comparison = (0, _toDate["default"])(date);
        var original = (0, _toDate["default"])(str);
        return !!(original && comparison && original > comparison);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    94326:
    /*!***********************************************!*\
      !*** ./node_modules/validator/lib/isAlpha.js ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isAlpha;
      exports.locales = void 0;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _alpha = __webpack_require__(
      /*! ./alpha */
      50395);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isAlpha(_str) {
        var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        (0, _assertString["default"])(_str);
        var str = _str;
        var ignore = options.ignore;

        if (ignore) {
          if (ignore instanceof RegExp) {
            str = str.replace(ignore, '');
          } else if (typeof ignore === 'string') {
            str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&'), "]"), 'g'), ''); // escape regex for ignore
          } else {
            throw new Error('ignore should be instance of a String or RegExp');
          }
        }

        if (locale in _alpha.alpha) {
          return _alpha.alpha[locale].test(str);
        }

        throw new Error("Invalid locale '".concat(locale, "'"));
      }

      var locales = Object.keys(_alpha.alpha);
      exports.locales = locales;
      /***/
    },

    /***/
    47114:
    /*!******************************************************!*\
      !*** ./node_modules/validator/lib/isAlphanumeric.js ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isAlphanumeric;
      exports.locales = void 0;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _alpha = __webpack_require__(
      /*! ./alpha */
      50395);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isAlphanumeric(_str) {
        var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        (0, _assertString["default"])(_str);
        var str = _str;
        var ignore = options.ignore;

        if (ignore) {
          if (ignore instanceof RegExp) {
            str = str.replace(ignore, '');
          } else if (typeof ignore === 'string') {
            str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&'), "]"), 'g'), ''); // escape regex for ignore
          } else {
            throw new Error('ignore should be instance of a String or RegExp');
          }
        }

        if (locale in _alpha.alphanumeric) {
          return _alpha.alphanumeric[locale].test(str);
        }

        throw new Error("Invalid locale '".concat(locale, "'"));
      }

      var locales = Object.keys(_alpha.alphanumeric);
      exports.locales = locales;
      /***/
    },

    /***/
    1896:
    /*!***********************************************!*\
      !*** ./node_modules/validator/lib/isAscii.js ***!
      \***********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isAscii;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /* eslint-disable no-control-regex */


      var ascii = /^[\x00-\x7F]+$/;
      /* eslint-enable no-control-regex */

      function isAscii(str) {
        (0, _assertString["default"])(str);
        return ascii.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    53674:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/isBIC.js ***!
      \*********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isBIC;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _isISO31661Alpha = __webpack_require__(
      /*! ./isISO31661Alpha2 */
      95062);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      } // https://en.wikipedia.org/wiki/ISO_9362


      var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;

      function isBIC(str) {
        (0, _assertString["default"])(str); // toUpperCase() should be removed when a new major version goes out that changes
        // the regex to [A-Z] (per the spec).

        if (_isISO31661Alpha.CountryCodes.indexOf(str.slice(4, 6).toUpperCase()) < 0) {
          return false;
        }

        return isBICReg.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    26930:
    /*!************************************************!*\
      !*** ./node_modules/validator/lib/isBase32.js ***!
      \************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isBase32;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var base32 = /^[A-Z2-7]+=*$/;

      function isBase32(str) {
        (0, _assertString["default"])(str);
        var len = str.length;

        if (len % 8 === 0 && base32.test(str)) {
          return true;
        }

        return false;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    6806:
    /*!************************************************!*\
      !*** ./node_modules/validator/lib/isBase58.js ***!
      \************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isBase58;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      } // Accepted chars - 123456789ABCDEFGH JKLMN PQRSTUVWXYZabcdefghijk mnopqrstuvwxyz


      var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;

      function isBase58(str) {
        (0, _assertString["default"])(str);

        if (base58Reg.test(str)) {
          return true;
        }

        return false;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    97104:
    /*!************************************************!*\
      !*** ./node_modules/validator/lib/isBase64.js ***!
      \************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isBase64;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var notBase64 = /[^A-Z0-9+\/=]/i;
      var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
      var defaultBase64Options = {
        urlSafe: false
      };

      function isBase64(str, options) {
        (0, _assertString["default"])(str);
        options = (0, _merge["default"])(options, defaultBase64Options);
        var len = str.length;

        if (options.urlSafe) {
          return urlSafeBase64.test(str);
        }

        if (len % 4 !== 0 || notBase64.test(str)) {
          return false;
        }

        var firstPaddingChar = str.indexOf('=');
        return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    52594:
    /*!************************************************!*\
      !*** ./node_modules/validator/lib/isBefore.js ***!
      \************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isBefore;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _toDate = _interopRequireDefault(__webpack_require__(
      /*! ./toDate */
      83686));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isBefore(str) {
        var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
        (0, _assertString["default"])(str);
        var comparison = (0, _toDate["default"])(date);
        var original = (0, _toDate["default"])(str);
        return !!(original && comparison && original < comparison);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    42922:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/isBoolean.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isBoolean;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isBoolean(str) {
        (0, _assertString["default"])(str);
        return ['true', 'false', '1', '0'].indexOf(str) >= 0;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    83179:
    /*!****************************************************!*\
      !*** ./node_modules/validator/lib/isBtcAddress.js ***!
      \****************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isBtcAddress;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      } // supports Bech32 addresses


      var bech32 = /^(bc1)[a-z0-9]{25,39}$/;
      var base58 = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;

      function isBtcAddress(str) {
        (0, _assertString["default"])(str); // check for bech32

        if (str.startsWith('bc1')) {
          return bech32.test(str);
        }

        return base58.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    88347:
    /*!****************************************************!*\
      !*** ./node_modules/validator/lib/isByteLength.js ***!
      \****************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isByteLength;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }
      /* eslint-disable prefer-rest-params */


      function isByteLength(str, options) {
        (0, _assertString["default"])(str);
        var min;
        var max;

        if (_typeof(options) === 'object') {
          min = options.min || 0;
          max = options.max;
        } else {
          // backwards compatibility: isByteLength(str, min [, max])
          min = arguments[1];
          max = arguments[2];
        }

        var len = encodeURI(str).split(/%..|./).length - 1;
        return len >= min && (typeof max === 'undefined' || len <= max);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    42140:
    /*!****************************************************!*\
      !*** ./node_modules/validator/lib/isCreditCard.js ***!
      \****************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isCreditCard;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /* eslint-disable max-len */


      var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
      /* eslint-enable max-len */

      function isCreditCard(str) {
        (0, _assertString["default"])(str);
        var sanitized = str.replace(/[- ]+/g, '');

        if (!creditCard.test(sanitized)) {
          return false;
        }

        var sum = 0;
        var digit;
        var tmpNum;
        var shouldDouble;

        for (var i = sanitized.length - 1; i >= 0; i--) {
          digit = sanitized.substring(i, i + 1);
          tmpNum = parseInt(digit, 10);

          if (shouldDouble) {
            tmpNum *= 2;

            if (tmpNum >= 10) {
              sum += tmpNum % 10 + 1;
            } else {
              sum += tmpNum;
            }
          } else {
            sum += tmpNum;
          }

          shouldDouble = !shouldDouble;
        }

        return !!(sum % 10 === 0 ? sanitized : false);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    49219:
    /*!**************************************************!*\
      !*** ./node_modules/validator/lib/isCurrency.js ***!
      \**************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isCurrency;

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function currencyRegex(options) {
        var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
        options.digits_after_decimal.forEach(function (digit, index) {
          if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
        });
        var symbol = "(".concat(options.symbol.replace(/\W/, function (m) {
          return "\\".concat(m);
        }), ")").concat(options.require_symbol ? '' : '?'),
            negative = '-?',
            whole_dollar_amount_without_sep = '[1-9]\\d*',
            whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"),
            valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
            whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join('|'), ")?"),
            decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? '' : '?');
        var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ''); // default is negative sign before symbol, but there are two other options (besides parens)

        if (options.allow_negatives && !options.parens_for_negatives) {
          if (options.negative_sign_after_digits) {
            pattern += negative;
          } else if (options.negative_sign_before_digits) {
            pattern = negative + pattern;
          }
        } // South African Rand, for example, uses R 123 (space) and R-123 (no space)


        if (options.allow_negative_sign_placeholder) {
          pattern = "( (?!\\-))?".concat(pattern);
        } else if (options.allow_space_after_symbol) {
          pattern = " ?".concat(pattern);
        } else if (options.allow_space_after_digits) {
          pattern += '( (?!$))?';
        }

        if (options.symbol_after_digits) {
          pattern += symbol;
        } else {
          pattern = symbol + pattern;
        }

        if (options.allow_negatives) {
          if (options.parens_for_negatives) {
            pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
          } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
            pattern = negative + pattern;
          }
        } // ensure there's a dollar and/or decimal amount, and that
        // it doesn't start with a space or a negative sign followed by a space


        return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
      }

      var default_currency_options = {
        symbol: '$',
        require_symbol: false,
        allow_space_after_symbol: false,
        symbol_after_digits: false,
        allow_negatives: true,
        parens_for_negatives: false,
        negative_sign_before_digits: false,
        negative_sign_after_digits: false,
        allow_negative_sign_placeholder: false,
        thousands_separator: ',',
        decimal_separator: '.',
        allow_decimal: true,
        require_decimal: false,
        digits_after_decimal: [2],
        allow_space_after_digits: false
      };

      function isCurrency(str, options) {
        (0, _assertString["default"])(str);
        options = (0, _merge["default"])(options, default_currency_options);
        return currencyRegex(options).test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    55096:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/isDataURI.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isDataURI;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
      var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
      var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

      function isDataURI(str) {
        (0, _assertString["default"])(str);
        var data = str.split(',');

        if (data.length < 2) {
          return false;
        }

        var attributes = data.shift().trim().split(';');
        var schemeAndMediaType = attributes.shift();

        if (schemeAndMediaType.substr(0, 5) !== 'data:') {
          return false;
        }

        var mediaType = schemeAndMediaType.substr(5);

        if (mediaType !== '' && !validMediaType.test(mediaType)) {
          return false;
        }

        for (var i = 0; i < attributes.length; i++) {
          if (!(i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') && !validAttribute.test(attributes[i])) {
            return false;
          }
        }

        for (var _i = 0; _i < data.length; _i++) {
          if (!validData.test(data[_i])) {
            return false;
          }
        }

        return true;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    97448:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isDate.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isDate;

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it;

        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;

            var F = function F() {};

            return {
              s: F,
              n: function n() {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function e(_e2) {
                throw _e2;
              },
              f: F
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var normalCompletion = true,
            didErr = false,
            err;
        return {
          s: function s() {
            it = o[Symbol.iterator]();
          },
          n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e3) {
            didErr = true;
            err = _e3;
          },
          f: function f() {
            try {
              if (!normalCompletion && it["return"] != null) it["return"]();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      var default_date_options = {
        format: 'YYYY/MM/DD',
        delimiters: ['/', '-'],
        strictMode: false
      };

      function isValidFormat(format) {
        return /(^(y{4}|y{2})[\/-](m{1,2})[\/-](d{1,2})$)|(^(m{1,2})[\/-](d{1,2})[\/-]((y{4}|y{2})$))|(^(d{1,2})[\/-](m{1,2})[\/-]((y{4}|y{2})$))/gi.test(format);
      }

      function zip(date, format) {
        var zippedArr = [],
            len = Math.min(date.length, format.length);

        for (var i = 0; i < len; i++) {
          zippedArr.push([date[i], format[i]]);
        }

        return zippedArr;
      }

      function isDate(input, options) {
        if (typeof options === 'string') {
          // Allow backward compatbility for old format isDate(input [, format])
          options = (0, _merge["default"])({
            format: options
          }, default_date_options);
        } else {
          options = (0, _merge["default"])(options, default_date_options);
        }

        if (typeof input === 'string' && isValidFormat(options.format)) {
          var formatDelimiter = options.delimiters.find(function (delimiter) {
            return options.format.indexOf(delimiter) !== -1;
          });
          var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function (delimiter) {
            return input.indexOf(delimiter) !== -1;
          });
          var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
          var dateObj = {};

          var _iterator = _createForOfIteratorHelper(dateAndFormat),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  dateWord = _step$value[0],
                  formatWord = _step$value[1];

              if (dateWord.length !== formatWord.length) {
                return false;
              }

              dateObj[formatWord.charAt(0)] = dateWord;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return new Date("".concat(dateObj.m, "/").concat(dateObj.d, "/").concat(dateObj.y)).getDate() === +dateObj.d;
        }

        if (!options.strictMode) {
          return Object.prototype.toString.call(input) === '[object Date]' && isFinite(input);
        }

        return false;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    82507:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/isDecimal.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isDecimal;

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _includes = _interopRequireDefault(__webpack_require__(
      /*! ./util/includes */
      17631));

      var _alpha = __webpack_require__(
      /*! ./alpha */
      50395);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function decimalRegExp(options) {
        var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
        return regExp;
      }

      var default_decimal_options = {
        force_decimal: false,
        decimal_digits: '1,',
        locale: 'en-US'
      };
      var blacklist = ['', '-', '+'];

      function isDecimal(str, options) {
        (0, _assertString["default"])(str);
        options = (0, _merge["default"])(options, default_decimal_options);

        if (options.locale in _alpha.decimal) {
          return !(0, _includes["default"])(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
        }

        throw new Error("Invalid locale '".concat(options.locale, "'"));
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    60453:
    /*!*****************************************************!*\
      !*** ./node_modules/validator/lib/isDivisibleBy.js ***!
      \*****************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isDivisibleBy;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _toFloat = _interopRequireDefault(__webpack_require__(
      /*! ./toFloat */
      97));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isDivisibleBy(str, num) {
        (0, _assertString["default"])(str);
        return (0, _toFloat["default"])(str) % parseInt(num, 10) === 0;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    65603:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/isEAN.js ***!
      \*********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isEAN;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * The most commonly used EAN standard is
       * the thirteen-digit EAN-13, while the
       * less commonly used 8-digit EAN-8 barcode was
       * introduced for use on small packages.
       * Also EAN/UCC-14 is used for Grouping of individual
       * trade items above unit level(Intermediate, Carton or Pallet).
       * For more info about EAN-14 checkout: https://www.gtin.info/itf-14-barcodes/
       * EAN consists of:
       * GS1 prefix, manufacturer code, product code and check digit
       * Reference: https://en.wikipedia.org/wiki/International_Article_Number
       * Reference: https://www.gtin.info/
       */

      /**
       * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13; 14 for EAN-14
       * and Regular Expression for valid EANs (EAN-8, EAN-13, EAN-14),
       * with exact numberic matching of 8 or 13 or 14 digits [0-9]
       */


      var LENGTH_EAN_8 = 8;
      var LENGTH_EAN_14 = 14;
      var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
      /**
       * Get position weight given:
       * EAN length and digit index/position
       *
       * @param {number} length
       * @param {number} index
       * @return {number}
       */

      function getPositionWeightThroughLengthAndIndex(length, index) {
        if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) {
          return index % 2 === 0 ? 3 : 1;
        }

        return index % 2 === 0 ? 1 : 3;
      }
      /**
       * Calculate EAN Check Digit
       * Reference: https://en.wikipedia.org/wiki/International_Article_Number#Calculation_of_checksum_digit
       *
       * @param {string} ean
       * @return {number}
       */


      function calculateCheckDigit(ean) {
        var checksum = ean.slice(0, -1).split('').map(function (_char, index) {
          return Number(_char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
        }).reduce(function (acc, partialSum) {
          return acc + partialSum;
        }, 0);
        var remainder = 10 - checksum % 10;
        return remainder < 10 ? remainder : 0;
      }
      /**
       * Check if string is valid EAN:
       * Matches EAN-8/EAN-13/EAN-14 regex
       * Has valid check digit.
       *
       * @param {string} str
       * @return {boolean}
       */


      function isEAN(str) {
        (0, _assertString["default"])(str);
        var actualCheckDigit = Number(str.slice(-1));
        return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    55263:
    /*!***********************************************!*\
      !*** ./node_modules/validator/lib/isEmail.js ***!
      \***********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isEmail;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      var _isByteLength = _interopRequireDefault(__webpack_require__(
      /*! ./isByteLength */
      88347));

      var _isFQDN = _interopRequireDefault(__webpack_require__(
      /*! ./isFQDN */
      34469));

      var _isIP = _interopRequireDefault(__webpack_require__(
      /*! ./isIP */
      34335));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var default_email_options = {
        allow_display_name: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true,
        blacklisted_chars: '',
        ignore_max_length: false
      };
      /* eslint-disable max-len */

      /* eslint-disable no-control-regex */

      var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
      var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
      var gmailUserPart = /^[a-z\d]+$/;
      var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
      var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
      var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
      var defaultMaxEmailLength = 254;
      /* eslint-enable max-len */

      /* eslint-enable no-control-regex */

      /**
       * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
       * @param {String} display_name
       */

      function validateDisplayName(display_name) {
        var display_name_without_quotes = display_name.replace(/^"(.+)"$/, '$1'); // display name with only spaces is not valid

        if (!display_name_without_quotes.trim()) {
          return false;
        } // check whether display name contains illegal character


        var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);

        if (contains_illegal) {
          // if contains illegal characters,
          // must to be enclosed in double-quotes, otherwise it's not a valid display name
          if (display_name_without_quotes === display_name) {
            return false;
          } // the quotes in display name must start with character symbol \


          var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;

          if (!all_start_with_back_slash) {
            return false;
          }
        }

        return true;
      }

      function isEmail(str, options) {
        (0, _assertString["default"])(str);
        options = (0, _merge["default"])(options, default_email_options);

        if (options.require_display_name || options.allow_display_name) {
          var display_email = str.match(splitNameAddress);

          if (display_email) {
            var display_name = display_email[1]; // Remove display name and angle brackets to get email address
            // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)

            str = str.replace(display_name, '').replace(/(^<|>$)/g, ''); // sometimes need to trim the last space to get the display name
            // because there may be a space between display name and email address
            // eg. myname <address@gmail.com>
            // the display name is `myname` instead of `myname `, so need to trim the last space

            if (display_name.endsWith(' ')) {
              display_name = display_name.substr(0, display_name.length - 1);
            }

            if (!validateDisplayName(display_name)) {
              return false;
            }
          } else if (options.require_display_name) {
            return false;
          }
        }

        if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
          return false;
        }

        var parts = str.split('@');
        var domain = parts.pop();
        var user = parts.join('@');
        var lower_domain = domain.toLowerCase();

        if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
          /*
            Previously we removed dots for gmail addresses before validating.
            This was removed because it allows `multiple..dots@gmail.com`
            to be reported as valid, but it is not.
            Gmail only normalizes single dots, removing them from here is pointless,
            should be done in normalizeEmail
          */
          user = user.toLowerCase(); // Removing sub-address from username before gmail validation

          var username = user.split('+')[0]; // Dots are not included in gmail length restriction

          if (!(0, _isByteLength["default"])(username.replace('.', ''), {
            min: 6,
            max: 30
          })) {
            return false;
          }

          var _user_parts = username.split('.');

          for (var i = 0; i < _user_parts.length; i++) {
            if (!gmailUserPart.test(_user_parts[i])) {
              return false;
            }
          }
        }

        if (options.ignore_max_length === false && (!(0, _isByteLength["default"])(user, {
          max: 64
        }) || !(0, _isByteLength["default"])(domain, {
          max: 254
        }))) {
          return false;
        }

        if (!(0, _isFQDN["default"])(domain, {
          require_tld: options.require_tld
        })) {
          if (!options.allow_ip_domain) {
            return false;
          }

          if (!(0, _isIP["default"])(domain)) {
            if (!domain.startsWith('[') || !domain.endsWith(']')) {
              return false;
            }

            var noBracketdomain = domain.substr(1, domain.length - 2);

            if (noBracketdomain.length === 0 || !(0, _isIP["default"])(noBracketdomain)) {
              return false;
            }
          }
        }

        if (user[0] === '"') {
          user = user.slice(1, user.length - 1);
          return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
        }

        var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
        var user_parts = user.split('.');

        for (var _i = 0; _i < user_parts.length; _i++) {
          if (!pattern.test(user_parts[_i])) {
            return false;
          }
        }

        if (options.blacklisted_chars) {
          if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), 'g')) !== -1) return false;
        }

        return true;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    53200:
    /*!***********************************************!*\
      !*** ./node_modules/validator/lib/isEmpty.js ***!
      \***********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isEmpty;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var default_is_empty_options = {
        ignore_whitespace: false
      };

      function isEmpty(str, options) {
        (0, _assertString["default"])(str);
        options = (0, _merge["default"])(options, default_is_empty_options);
        return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    69362:
    /*!*********************************************************!*\
      !*** ./node_modules/validator/lib/isEthereumAddress.js ***!
      \*********************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isEthereumAddress;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var eth = /^(0x)[0-9a-f]{40}$/i;

      function isEthereumAddress(str) {
        (0, _assertString["default"])(str);
        return eth.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    34469:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isFQDN.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isFQDN;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var default_fqdn_options = {
        require_tld: true,
        allow_underscores: false,
        allow_trailing_dot: false,
        allow_numeric_tld: false
      };

      function isFQDN(str, options) {
        (0, _assertString["default"])(str);
        options = (0, _merge["default"])(options, default_fqdn_options);
        /* Remove the optional trailing dot before checking validity */

        if (options.allow_trailing_dot && str[str.length - 1] === '.') {
          str = str.substring(0, str.length - 1);
        }

        var parts = str.split('.');
        var tld = parts[parts.length - 1];

        if (options.require_tld) {
          // disallow fqdns without tld
          if (parts.length < 2) {
            return false;
          }

          if (!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
            return false;
          } // disallow spaces && special characers


          if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(tld)) {
            return false;
          }
        } // reject numeric TLDs


        if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
          return false;
        }

        return parts.every(function (part) {
          if (part.length > 63) {
            return false;
          }

          if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
            return false;
          } // disallow full-width chars


          if (/[\uff01-\uff5e]/.test(part)) {
            return false;
          } // disallow parts starting or ending with hyphen


          if (/^-|-$/.test(part)) {
            return false;
          }

          if (!options.allow_underscores && /_/.test(part)) {
            return false;
          }

          return true;
        });
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    30476:
    /*!***********************************************!*\
      !*** ./node_modules/validator/lib/isFloat.js ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isFloat;
      exports.locales = void 0;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _alpha = __webpack_require__(
      /*! ./alpha */
      50395);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isFloat(str, options) {
        (0, _assertString["default"])(str);
        options = options || {};

        var _float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

        if (str === '' || str === '.' || str === '-' || str === '+') {
          return false;
        }

        var value = parseFloat(str.replace(',', '.'));
        return _float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
      }

      var locales = Object.keys(_alpha.decimal);
      exports.locales = locales;
      /***/
    },

    /***/
    17779:
    /*!***************************************************!*\
      !*** ./node_modules/validator/lib/isFullWidth.js ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isFullWidth;
      exports.fullWidth = void 0;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
      exports.fullWidth = fullWidth;

      function isFullWidth(str) {
        (0, _assertString["default"])(str);
        return fullWidth.test(str);
      }
      /***/

    },

    /***/
    28722:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/isHSL.js ***!
      \*********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isHSL;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
      var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;

      function isHSL(str) {
        (0, _assertString["default"])(str); // Strip duplicate spaces before calling the validation regex (See  #1598 for more info)

        var strippedStr = str.replace(/\s+/g, ' ').replace(/\s?(hsla?\(|\)|,)\s?/ig, '$1');

        if (strippedStr.indexOf(',') !== -1) {
          return hslComma.test(strippedStr);
        }

        return hslSpace.test(strippedStr);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    23487:
    /*!***************************************************!*\
      !*** ./node_modules/validator/lib/isHalfWidth.js ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isHalfWidth;
      exports.halfWidth = void 0;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
      exports.halfWidth = halfWidth;

      function isHalfWidth(str) {
        (0, _assertString["default"])(str);
        return halfWidth.test(str);
      }
      /***/

    },

    /***/
    87999:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isHash.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isHash;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var lengths = {
        md5: 32,
        md4: 32,
        sha1: 40,
        sha256: 64,
        sha384: 96,
        sha512: 128,
        ripemd128: 32,
        ripemd160: 40,
        tiger128: 32,
        tiger160: 40,
        tiger192: 48,
        crc32: 8,
        crc32b: 8
      };

      function isHash(str, algorithm) {
        (0, _assertString["default"])(str);
        var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
        return hash.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    71711:
    /*!**************************************************!*\
      !*** ./node_modules/validator/lib/isHexColor.js ***!
      \**************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isHexColor;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

      function isHexColor(str) {
        (0, _assertString["default"])(str);
        return hexcolor.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    75204:
    /*!*****************************************************!*\
      !*** ./node_modules/validator/lib/isHexadecimal.js ***!
      \*****************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isHexadecimal;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

      function isHexadecimal(str) {
        (0, _assertString["default"])(str);
        return hexadecimal.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    28344:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isIBAN.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isIBAN;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * List of country codes with
       * corresponding IBAN regular expression
       * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
       */


      var ibanRegexThroughCountryCode = {
        AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
        AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
        AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
        AT: /^(AT[0-9]{2})\d{16}$/,
        AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
        BA: /^(BA[0-9]{2})\d{16}$/,
        BE: /^(BE[0-9]{2})\d{12}$/,
        BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
        BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
        BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
        BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
        CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
        CR: /^(CR[0-9]{2})\d{18}$/,
        CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
        CZ: /^(CZ[0-9]{2})\d{20}$/,
        DE: /^(DE[0-9]{2})\d{18}$/,
        DK: /^(DK[0-9]{2})\d{14}$/,
        DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
        EE: /^(EE[0-9]{2})\d{16}$/,
        EG: /^(EG[0-9]{2})\d{25}$/,
        ES: /^(ES[0-9]{2})\d{20}$/,
        FI: /^(FI[0-9]{2})\d{14}$/,
        FO: /^(FO[0-9]{2})\d{14}$/,
        FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
        GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
        GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
        GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
        GL: /^(GL[0-9]{2})\d{14}$/,
        GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
        GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
        HR: /^(HR[0-9]{2})\d{17}$/,
        HU: /^(HU[0-9]{2})\d{24}$/,
        IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
        IL: /^(IL[0-9]{2})\d{19}$/,
        IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
        IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
        IS: /^(IS[0-9]{2})\d{22}$/,
        IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
        JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
        KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
        KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
        LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
        LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
        LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
        LT: /^(LT[0-9]{2})\d{16}$/,
        LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
        LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
        MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
        MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
        ME: /^(ME[0-9]{2})\d{18}$/,
        MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
        MR: /^(MR[0-9]{2})\d{23}$/,
        MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
        MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
        MZ: /^(MZ[0-9]{2})\d{21}$/,
        NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
        NO: /^(NO[0-9]{2})\d{11}$/,
        PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
        PL: /^(PL[0-9]{2})\d{24}$/,
        PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
        PT: /^(PT[0-9]{2})\d{21}$/,
        QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
        RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
        RS: /^(RS[0-9]{2})\d{18}$/,
        SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
        SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
        SE: /^(SE[0-9]{2})\d{20}$/,
        SI: /^(SI[0-9]{2})\d{15}$/,
        SK: /^(SK[0-9]{2})\d{20}$/,
        SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
        SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
        TL: /^(TL[0-9]{2})\d{19}$/,
        TN: /^(TN[0-9]{2})\d{20}$/,
        TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
        UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
        VA: /^(VA[0-9]{2})\d{18}$/,
        VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
        XK: /^(XK[0-9]{2})\d{16}$/
      };
      /**
       * Check whether string has correct universal IBAN format
       * The IBAN consists of up to 34 alphanumeric characters, as follows:
       * Country Code using ISO 3166-1 alpha-2, two letters
       * check digits, two digits and
       * Basic Bank Account Number (BBAN), up to 30 alphanumeric characters.
       * NOTE: Permitted IBAN characters are: digits [0-9] and the 26 latin alphabetic [A-Z]
       *
       * @param {string} str - string under validation
       * @return {boolean}
       */

      function hasValidIbanFormat(str) {
        // Strip white spaces and hyphens
        var strippedStr = str.replace(/[\s\-]+/gi, '').toUpperCase();
        var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
        return isoCountryCode in ibanRegexThroughCountryCode && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
      }
      /**
         * Check whether string has valid IBAN Checksum
         * by performing basic mod-97 operation and
         * the remainder should equal 1
         * -- Start by rearranging the IBAN by moving the four initial characters to the end of the string
         * -- Replace each letter in the string with two digits, A -> 10, B = 11, Z = 35
         * -- Interpret the string as a decimal integer and
         * -- compute the remainder on division by 97 (mod 97)
         * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
         *
         * @param {string} str
         * @return {boolean}
         */


      function hasValidIbanChecksum(str) {
        var strippedStr = str.replace(/[^A-Z0-9]+/gi, '').toUpperCase(); // Keep only digits and A-Z latin alphabetic

        var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
        var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function (_char2) {
          return _char2.charCodeAt(0) - 55;
        });
        var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function (acc, value) {
          return Number(acc + value) % 97;
        }, '');
        return remainder === 1;
      }

      function isIBAN(str) {
        (0, _assertString["default"])(str);
        return hasValidIbanFormat(str) && hasValidIbanChecksum(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    1997:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isIMEI.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isIMEI;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var imeiRegexWithoutHypens = /^[0-9]{15}$/;
      var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;

      function isIMEI(str, options) {
        (0, _assertString["default"])(str);
        options = options || {}; // default regex for checking imei is the one without hyphens

        var imeiRegex = imeiRegexWithoutHypens;

        if (options.allow_hyphens) {
          imeiRegex = imeiRegexWithHypens;
        }

        if (!imeiRegex.test(str)) {
          return false;
        }

        str = str.replace(/-/g, '');
        var sum = 0,
            mul = 2,
            l = 14;

        for (var i = 0; i < l; i++) {
          var digit = str.substring(l - i - 1, l - i);
          var tp = parseInt(digit, 10) * mul;

          if (tp >= 10) {
            sum += tp % 10 + 1;
          } else {
            sum += tp;
          }

          if (mul === 1) {
            mul += 1;
          } else {
            mul -= 1;
          }
        }

        var chk = (10 - sum % 10) % 10;

        if (chk !== parseInt(str.substring(14, 15), 10)) {
          return false;
        }

        return true;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    34335:
    /*!********************************************!*\
      !*** ./node_modules/validator/lib/isIP.js ***!
      \********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isIP;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
      11.3.  Examples
      
         The following addresses
      
                   fe80::1234 (on the 1st link of the node)
                   ff02::5678 (on the 5th link of the node)
                   ff08::9abc (on the 10th organization of the node)
      
         would be represented as follows:
      
                   fe80::1234%1
                   ff02::5678%5
                   ff08::9abc%10
      
         (Here we assume a natural translation from a zone index to the
         <zone_id> part, where the Nth zone of any scope is translated into
         "N".)
      
         If we use interface names as <zone_id>, those addresses could also be
         represented as follows:
      
                  fe80::1234%ne0
                  ff02::5678%pvc1.3
                  ff08::9abc%interface10
      
         where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
         to the 5th link, and "interface10" belongs to the 10th organization.
       * * */


      var IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
      var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
      var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
      var IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
      var IPv6AddressRegExp = new RegExp('^(' + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ')(%[0-9a-zA-Z-.:]{1,})?$');

      function isIP(str) {
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        (0, _assertString["default"])(str);
        version = String(version);

        if (!version) {
          return isIP(str, 4) || isIP(str, 6);
        }

        if (version === '4') {
          if (!IPv4AddressRegExp.test(str)) {
            return false;
          }

          var parts = str.split('.').sort(function (a, b) {
            return a - b;
          });
          return parts[3] <= 255;
        }

        if (version === '6') {
          return !!IPv6AddressRegExp.test(str);
        }

        return false;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    55145:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/isIPRange.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isIPRange;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _isIP = _interopRequireDefault(__webpack_require__(
      /*! ./isIP */
      34335));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var subnetMaybe = /^\d{1,3}$/;
      var v4Subnet = 32;
      var v6Subnet = 128;

      function isIPRange(str) {
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        (0, _assertString["default"])(str);
        var parts = str.split('/'); // parts[0] -> ip, parts[1] -> subnet

        if (parts.length !== 2) {
          return false;
        }

        if (!subnetMaybe.test(parts[1])) {
          return false;
        } // Disallow preceding 0 i.e. 01, 02, ...


        if (parts[1].length > 1 && parts[1].startsWith('0')) {
          return false;
        }

        var isValidIP = (0, _isIP["default"])(parts[0], version);

        if (!isValidIP) {
          return false;
        } // Define valid subnet according to IP's version


        var expectedSubnet = null;

        switch (String(version)) {
          case '4':
            expectedSubnet = v4Subnet;
            break;

          case '6':
            expectedSubnet = v6Subnet;
            break;

          default:
            expectedSubnet = (0, _isIP["default"])(parts[0], '6') ? v6Subnet : v4Subnet;
        }

        return parts[1] <= expectedSubnet && parts[1] >= 0;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    99540:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isISBN.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isISBN;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
      var isbn13Maybe = /^(?:[0-9]{13})$/;
      var factor = [1, 3];

      function isISBN(str) {
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        (0, _assertString["default"])(str);
        version = String(version);

        if (!version) {
          return isISBN(str, 10) || isISBN(str, 13);
        }

        var sanitized = str.replace(/[\s-]+/g, '');
        var checksum = 0;
        var i;

        if (version === '10') {
          if (!isbn10Maybe.test(sanitized)) {
            return false;
          }

          for (i = 0; i < 9; i++) {
            checksum += (i + 1) * sanitized.charAt(i);
          }

          if (sanitized.charAt(9) === 'X') {
            checksum += 10 * 10;
          } else {
            checksum += 10 * sanitized.charAt(9);
          }

          if (checksum % 11 === 0) {
            return !!sanitized;
          }
        } else if (version === '13') {
          if (!isbn13Maybe.test(sanitized)) {
            return false;
          }

          for (i = 0; i < 12; i++) {
            checksum += factor[i % 2] * sanitized.charAt(i);
          }

          if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
            return !!sanitized;
          }
        }

        return false;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    86150:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isISIN.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isISIN;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/; // this link details how the check digit is calculated:
      // https://www.isin.org/isin-format/. it is a little bit
      // odd in that it works with digits, not numbers. in order
      // to make only one pass through the ISIN characters, the
      // each alpha character is handled as 2 characters within
      // the loop.

      function isISIN(str) {
        (0, _assertString["default"])(str);

        if (!isin.test(str)) {
          return false;
        }

        var _double = true;
        var sum = 0; // convert values

        for (var i = str.length - 2; i >= 0; i--) {
          if (str[i] >= 'A' && str[i] <= 'Z') {
            var value = str[i].charCodeAt(0) - 55;
            var lo = value % 10;
            var hi = Math.trunc(value / 10); // letters have two digits, so handle the low order
            // and high order digits separately.

            for (var _i = 0, _arr = [lo, hi]; _i < _arr.length; _i++) {
              var digit = _arr[_i];

              if (_double) {
                if (digit >= 5) {
                  sum += 1 + (digit - 5) * 2;
                } else {
                  sum += digit * 2;
                }
              } else {
                sum += digit;
              }

              _double = !_double;
            }
          } else {
            var _digit = str[i].charCodeAt(0) - '0'.charCodeAt(0);

            if (_double) {
              if (_digit >= 5) {
                sum += 1 + (_digit - 5) * 2;
              } else {
                sum += _digit * 2;
              }
            } else {
              sum += _digit;
            }

            _double = !_double;
          }
        }

        var check = Math.trunc((sum + 9) / 10) * 10 - sum;
        return +str[str.length - 1] === check;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    95062:
    /*!********************************************************!*\
      !*** ./node_modules/validator/lib/isISO31661Alpha2.js ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isISO31661Alpha2;
      exports.CountryCodes = void 0;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      } // from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2


      var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

      function isISO31661Alpha2(str) {
        (0, _assertString["default"])(str);
        return validISO31661Alpha2CountriesCodes.indexOf(str.toUpperCase()) >= 0;
      }

      var CountryCodes = validISO31661Alpha2CountriesCodes;
      exports.CountryCodes = CountryCodes;
      /***/
    },

    /***/
    6305:
    /*!********************************************************!*\
      !*** ./node_modules/validator/lib/isISO31661Alpha3.js ***!
      \********************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isISO31661Alpha3;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _includes = _interopRequireDefault(__webpack_require__(
      /*! ./util/includes */
      17631));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      } // from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3


      var validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];

      function isISO31661Alpha3(str) {
        (0, _assertString["default"])(str);
        return (0, _includes["default"])(validISO31661Alpha3CountriesCodes, str.toUpperCase());
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    11415:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/isISO8601.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isISO8601;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /* eslint-disable max-len */
      // from http://goo.gl/0ejHHW


      var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/; // same as above, except with a strict 'T' separator between date and time

      var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
      /* eslint-enable max-len */

      var isValidDate = function isValidDate(str) {
        // str must have passed the ISO8601 check
        // this check is meant to catch invalid dates
        // like 2009-02-31
        // first check for ordinal dates
        var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);

        if (ordinalMatch) {
          var oYear = Number(ordinalMatch[1]);
          var oDay = Number(ordinalMatch[2]); // if is leap year

          if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
          return oDay <= 365;
        }

        var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
        var year = match[1];
        var month = match[2];
        var day = match[3];
        var monthString = month ? "0".concat(month).slice(-2) : month;
        var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare

        var d = new Date("".concat(year, "-").concat(monthString || '01', "-").concat(dayString || '01'));

        if (month && day) {
          return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
        }

        return true;
      };

      function isISO8601(str) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _assertString["default"])(str);
        var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
        if (check && options.strict) return isValidDate(str);
        return check;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    20668:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isISRC.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isISRC;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      } // see http://isrc.ifpi.org/en/isrc-standard/code-syntax


      var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

      function isISRC(str) {
        (0, _assertString["default"])(str);
        return isrc.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    25956:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isISSN.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isISSN;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var issn = '^\\d{4}-?\\d{3}[\\dX]$';

      function isISSN(str) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _assertString["default"])(str);
        var testIssn = issn;
        testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
        testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');

        if (!testIssn.test(str)) {
          return false;
        }

        var digits = str.replace('-', '').toUpperCase();
        var checksum = 0;

        for (var i = 0; i < digits.length; i++) {
          var digit = digits[i];
          checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
        }

        return checksum % 11 === 0;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    36222:
    /*!******************************************************!*\
      !*** ./node_modules/validator/lib/isIdentityCard.js ***!
      \******************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isIdentityCard;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var validators = {
        ES: function ES(str) {
          (0, _assertString["default"])(str);
          var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
          var charsValue = {
            X: 0,
            Y: 1,
            Z: 2
          };
          var controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; // sanitize user input

          var sanitized = str.trim().toUpperCase(); // validate the data structure

          if (!DNI.test(sanitized)) {
            return false;
          } // validate the control digit


          var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function (_char3) {
            return charsValue[_char3];
          });
          return sanitized.endsWith(controlDigits[number % 23]);
        },
        IN: function IN(str) {
          var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/; // multiplication table

          var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]]; // permutation table

          var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]]; // sanitize user input

          var sanitized = str.trim(); // validate the data structure

          if (!DNI.test(sanitized)) {
            return false;
          }

          var c = 0;
          var invertedArray = sanitized.replace(/\s/g, '').split('').map(Number).reverse();
          invertedArray.forEach(function (val, i) {
            c = d[c][p[i % 8][val]];
          });
          return c === 0;
        },
        IR: function IR(str) {
          if (!str.match(/^\d{10}$/)) return false;
          str = "0000".concat(str).substr(str.length - 6);
          if (parseInt(str.substr(3, 6), 10) === 0) return false;
          var lastNumber = parseInt(str.substr(9, 1), 10);
          var sum = 0;

          for (var i = 0; i < 9; i++) {
            sum += parseInt(str.substr(i, 1), 10) * (10 - i);
          }

          sum %= 11;
          return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
        },
        IT: function IT(str) {
          if (str.length !== 9) return false;
          if (str === 'CA00000AA') return false; // https://it.wikipedia.org/wiki/Carta_d%27identit%C3%A0_elettronica_italiana

          return str.search(/C[A-Z][0-9]{5}[A-Z]{2}/i) > -1;
        },
        NO: function NO(str) {
          var sanitized = str.trim();
          if (isNaN(Number(sanitized))) return false;
          if (sanitized.length !== 11) return false;
          if (sanitized === '00000000000') return false; // https://no.wikipedia.org/wiki/F%C3%B8dselsnummer

          var f = sanitized.split('').map(Number);
          var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
          var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
          if (k1 !== f[9] || k2 !== f[10]) return false;
          return true;
        },
        'he-IL': function heIL(str) {
          var DNI = /^\d{9}$/; // sanitize user input

          var sanitized = str.trim(); // validate the data structure

          if (!DNI.test(sanitized)) {
            return false;
          }

          var id = sanitized;
          var sum = 0,
              incNum;

          for (var i = 0; i < id.length; i++) {
            incNum = Number(id[i]) * (i % 2 + 1); // Multiply number by 1 or 2

            sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total
          }

          return sum % 10 === 0;
        },
        'ar-LY': function arLY(str) {
          // Libya National Identity Number NIN is 12 digits, the first digit is either 1 or 2
          var NIN = /^(1|2)\d{11}$/; // sanitize user input

          var sanitized = str.trim(); // validate the data structure

          if (!NIN.test(sanitized)) {
            return false;
          }

          return true;
        },
        'ar-TN': function arTN(str) {
          var DNI = /^\d{8}$/; // sanitize user input

          var sanitized = str.trim(); // validate the data structure

          if (!DNI.test(sanitized)) {
            return false;
          }

          return true;
        },
        'zh-CN': function zhCN(str) {
          var provincesAndCities = ['11', // 北京
          '12', // 天津
          '13', // 河北
          '14', // 山西
          '15', // 内蒙古
          '21', // 辽宁
          '22', // 吉林
          '23', // 黑龙江
          '31', // 上海
          '32', // 江苏
          '33', // 浙江
          '34', // 安徽
          '35', // 福建
          '36', // 江西
          '37', // 山东
          '41', // 河南
          '42', // 湖北
          '43', // 湖南
          '44', // 广东
          '45', // 广西
          '46', // 海南
          '50', // 重庆
          '51', // 四川
          '52', // 贵州
          '53', // 云南
          '54', // 西藏
          '61', // 陕西
          '62', // 甘肃
          '63', // 青海
          '64', // 宁夏
          '65', // 新疆
          '71', // 台湾
          '81', // 香港
          '82', // 澳门
          '91' // 国外
          ];
          var powers = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'];
          var parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

          var checkAddressCode = function checkAddressCode(addressCode) {
            return provincesAndCities.includes(addressCode);
          };

          var checkBirthDayCode = function checkBirthDayCode(birDayCode) {
            var yyyy = parseInt(birDayCode.substring(0, 4), 10);
            var mm = parseInt(birDayCode.substring(4, 6), 10);
            var dd = parseInt(birDayCode.substring(6), 10);
            var xdata = new Date(yyyy, mm - 1, dd);

            if (xdata > new Date()) {
              return false; // eslint-disable-next-line max-len
            } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
              return true;
            }

            return false;
          };

          var getParityBit = function getParityBit(idCardNo) {
            var id17 = idCardNo.substring(0, 17);
            var power = 0;

            for (var i = 0; i < 17; i++) {
              power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
            }

            var mod = power % 11;
            return parityBit[mod];
          };

          var checkParityBit = function checkParityBit(idCardNo) {
            return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
          };

          var check15IdCardNo = function check15IdCardNo(idCardNo) {
            var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
            if (!check) return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = "19".concat(idCardNo.substring(6, 12));
            check = checkBirthDayCode(birDayCode);
            if (!check) return false;
            return true;
          };

          var check18IdCardNo = function check18IdCardNo(idCardNo) {
            var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
            if (!check) return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = idCardNo.substring(6, 14);
            check = checkBirthDayCode(birDayCode);
            if (!check) return false;
            return checkParityBit(idCardNo);
          };

          var checkIdCardNo = function checkIdCardNo(idCardNo) {
            var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
            if (!check) return false;

            if (idCardNo.length === 15) {
              return check15IdCardNo(idCardNo);
            }

            return check18IdCardNo(idCardNo);
          };

          return checkIdCardNo(str);
        },
        'zh-TW': function zhTW(str) {
          var ALPHABET_CODES = {
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            G: 16,
            H: 17,
            I: 34,
            J: 18,
            K: 19,
            L: 20,
            M: 21,
            N: 22,
            O: 35,
            P: 23,
            Q: 24,
            R: 25,
            S: 26,
            T: 27,
            U: 28,
            V: 29,
            W: 32,
            X: 30,
            Y: 31,
            Z: 33
          };
          var sanitized = str.trim().toUpperCase();
          if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;
          return Array.from(sanitized).reduce(function (sum, number, index) {
            if (index === 0) {
              var code = ALPHABET_CODES[number];
              return code % 10 * 9 + Math.floor(code / 10);
            }

            if (index === 9) {
              return (10 - sum % 10 - Number(number)) % 10 === 0;
            }

            return sum + Number(number) * (9 - index);
          }, 0);
        }
      };

      function isIdentityCard(str, locale) {
        (0, _assertString["default"])(str);

        if (locale in validators) {
          return validators[locale](str);
        } else if (locale === 'any') {
          for (var key in validators) {
            // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
            // istanbul ignore else
            if (validators.hasOwnProperty(key)) {
              var validator = validators[key];

              if (validator(str)) {
                return true;
              }
            }
          }

          return false;
        }

        throw new Error("Invalid locale '".concat(locale, "'"));
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    48153:
    /*!********************************************!*\
      !*** ./node_modules/validator/lib/isIn.js ***!
      \********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isIn;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _toString = _interopRequireDefault(__webpack_require__(
      /*! ./util/toString */
      33610));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function isIn(str, options) {
        (0, _assertString["default"])(str);
        var i;

        if (Object.prototype.toString.call(options) === '[object Array]') {
          var array = [];

          for (i in options) {
            // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
            // istanbul ignore else
            if ({}.hasOwnProperty.call(options, i)) {
              array[i] = (0, _toString["default"])(options[i]);
            }
          }

          return array.indexOf(str) >= 0;
        } else if (_typeof(options) === 'object') {
          return options.hasOwnProperty(str);
        } else if (options && typeof options.indexOf === 'function') {
          return options.indexOf(str) >= 0;
        }

        return false;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    33131:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/isInt.js ***!
      \*********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isInt;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var _int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
      var intLeadingZeroes = /^[-+]?[0-9]+$/;

      function isInt(str, options) {
        (0, _assertString["default"])(str);
        options = options || {}; // Get the regex to use for testing, based on whether
        // leading zeroes are allowed or not.

        var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? _int : intLeadingZeroes; // Check min/max/lt/gt

        var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
        var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
        var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
        var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
        return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    47074:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isJSON.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isJSON;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      var default_json_options = {
        allow_primitives: false
      };

      function isJSON(str, options) {
        (0, _assertString["default"])(str);

        try {
          options = (0, _merge["default"])(options, default_json_options);
          var primitives = [];

          if (options.allow_primitives) {
            primitives = [null, false, true];
          }

          var obj = JSON.parse(str);
          return primitives.includes(obj) || !!obj && _typeof(obj) === 'object';
        } catch (e) {
          /* ignore */
        }

        return false;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    92541:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/isJWT.js ***!
      \*********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isJWT;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _isBase = _interopRequireDefault(__webpack_require__(
      /*! ./isBase64 */
      97104));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isJWT(str) {
        (0, _assertString["default"])(str);
        var dotSplit = str.split('.');
        var len = dotSplit.length;

        if (len > 3 || len < 2) {
          return false;
        }

        return dotSplit.reduce(function (acc, currElem) {
          return acc && (0, _isBase["default"])(currElem, {
            urlSafe: true
          });
        }, true);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    18343:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/isLatLong.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isLatLong;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
      var _long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
      var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
      var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
      var defaultLatLongOptions = {
        checkDMS: false
      };

      function isLatLong(str, options) {
        (0, _assertString["default"])(str);
        options = (0, _merge["default"])(options, defaultLatLongOptions);
        if (!str.includes(',')) return false;
        var pair = str.split(',');
        if (pair[0].startsWith('(') && !pair[1].endsWith(')') || pair[1].endsWith(')') && !pair[0].startsWith('(')) return false;

        if (options.checkDMS) {
          return latDMS.test(pair[0]) && longDMS.test(pair[1]);
        }

        return lat.test(pair[0]) && _long.test(pair[1]);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    88921:
    /*!************************************************!*\
      !*** ./node_modules/validator/lib/isLength.js ***!
      \************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isLength;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }
      /* eslint-disable prefer-rest-params */


      function isLength(str, options) {
        (0, _assertString["default"])(str);
        var min;
        var max;

        if (_typeof(options) === 'object') {
          min = options.min || 0;
          max = options.max;
        } else {
          // backwards compatibility: isLength(str, min [, max])
          min = arguments[1] || 0;
          max = arguments[2];
        }

        var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
        var len = str.length - surrogatePairs.length;
        return len >= min && (typeof max === 'undefined' || len <= max);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    96105:
    /*!******************************************************!*\
      !*** ./node_modules/validator/lib/isLicensePlate.js ***!
      \******************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isLicensePlate;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var validators = {
        'de-DE': function deDE(str) {
          return /^((AW|UL|AK|GA|AÖ|LF|AZ|AM|AS|ZE|AN|AB|A|KG|KH|BA|EW|BZ|HY|KM|BT|HP|B|BC|BI|BO|FN|TT|ÜB|BN|AH|BS|FR|HB|ZZ|BB|BK|BÖ|OC|OK|CW|CE|C|CO|LH|CB|KW|LC|LN|DA|DI|DE|DH|SY|NÖ|DO|DD|DU|DN|D|EI|EA|EE|FI|EM|EL|EN|PF|ED|EF|ER|AU|ZP|E|ES|NT|EU|FL|FO|FT|FF|F|FS|FD|FÜ|GE|G|GI|GF|GS|ZR|GG|GP|GR|NY|ZI|GÖ|GZ|GT|HA|HH|HM|HU|WL|HZ|WR|RN|HK|HD|HN|HS|GK|HE|HF|RZ|HI|HG|HO|HX|IK|IL|IN|J|JL|KL|KA|KS|KF|KE|KI|KT|KO|KN|KR|KC|KU|K|LD|LL|LA|L|OP|LM|LI|LB|LU|LÖ|HL|LG|MD|GN|MZ|MA|ML|MR|MY|AT|DM|MC|NZ|RM|RG|MM|ME|MB|MI|FG|DL|HC|MW|RL|MK|MG|MÜ|WS|MH|M|MS|NU|NB|ND|NM|NK|NW|NR|NI|NF|DZ|EB|OZ|TG|TO|N|OA|GM|OB|CA|EH|FW|OF|OL|OE|OG|BH|LR|OS|AA|GD|OH|KY|NP|WK|PB|PA|PE|PI|PS|P|PM|PR|RA|RV|RE|R|H|SB|WN|RS|RD|RT|BM|NE|GV|RP|SU|GL|RO|GÜ|RH|EG|RW|PN|SK|MQ|RU|SZ|RI|SL|SM|SC|HR|FZ|VS|SW|SN|CR|SE|SI|SO|LP|SG|NH|SP|IZ|ST|BF|TE|HV|OD|SR|S|AC|DW|ZW|TF|TS|TR|TÜ|UM|PZ|TP|UE|UN|UH|MN|KK|VB|V|AE|PL|RC|VG|GW|PW|VR|VK|KB|WA|WT|BE|WM|WE|AP|MO|WW|FB|WZ|WI|WB|JE|WF|WO|W|WÜ|BL|Z|GC)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(AIC|FDB|ABG|SLN|SAW|KLZ|BUL|ESB|NAB|SUL|WST|ABI|AZE|BTF|KÖT|DKB|FEU|ROT|ALZ|SMÜ|WER|AUR|NOR|DÜW|BRK|HAB|TÖL|WOR|BAD|BAR|BER|BIW|EBS|KEM|MÜB|PEG|BGL|BGD|REI|WIL|BKS|BIR|WAT|BOR|BOH|BOT|BRB|BLK|HHM|NEB|NMB|WSF|LEO|HDL|WMS|WZL|BÜS|CHA|KÖZ|ROD|WÜM|CLP|NEC|COC|ZEL|COE|CUX|DAH|LDS|DEG|DEL|RSL|DLG|DGF|LAN|HEI|MED|DON|KIB|ROK|JÜL|MON|SLE|EBE|EIC|HIG|WBS|BIT|PRÜ|LIB|EMD|WIT|ERH|HÖS|ERZ|ANA|ASZ|MAB|MEK|STL|SZB|FDS|HCH|HOR|WOL|FRG|GRA|WOS|FRI|FFB|GAP|GER|BRL|CLZ|GTH|NOH|HGW|GRZ|LÖB|NOL|WSW|DUD|HMÜ|OHA|KRU|HAL|HAM|HBS|QLB|HVL|NAU|HAS|EBN|GEO|HOH|HDH|ERK|HER|WAN|HEF|ROF|HBN|ALF|HSK|USI|NAI|REH|SAN|KÜN|ÖHR|HOL|WAR|ARN|BRG|GNT|HOG|WOH|KEH|MAI|PAR|RID|ROL|KLE|GEL|KUS|KYF|ART|SDH|LDK|DIL|MAL|VIB|LER|BNA|GHA|GRM|MTL|WUR|LEV|LIF|STE|WEL|LIP|VAI|LUP|HGN|LBZ|LWL|PCH|STB|DAN|MKK|SLÜ|MSP|TBB|MGH|MTK|BIN|MSH|EIL|HET|SGH|BID|MYK|MSE|MST|MÜR|WRN|MEI|GRH|RIE|MZG|MIL|OBB|BED|FLÖ|MOL|FRW|SEE|SRB|AIB|MOS|BCH|ILL|SOB|NMS|NEA|SEF|UFF|NEW|VOH|NDH|TDO|NWM|GDB|GVM|WIS|NOM|EIN|GAN|LAU|HEB|OHV|OSL|SFB|ERB|LOS|BSK|KEL|BSB|MEL|WTL|OAL|FÜS|MOD|OHZ|OPR|BÜR|PAF|PLÖ|CAS|GLA|REG|VIT|ECK|SIM|GOA|EMS|DIZ|GOH|RÜD|SWA|NES|KÖN|MET|LRO|BÜZ|DBR|ROS|TET|HRO|ROW|BRV|HIP|PAN|GRI|SHK|EIS|SRO|SOK|LBS|SCZ|MER|QFT|SLF|SLS|HOM|SLK|ASL|BBG|SBK|SFT|SHG|MGN|MEG|ZIG|SAD|NEN|OVI|SHA|BLB|SIG|SON|SPN|FOR|GUB|SPB|IGB|WND|STD|STA|SDL|OBG|HST|BOG|SHL|PIR|FTL|SEB|SÖM|SÜW|TIR|SAB|TUT|ANG|SDT|LÜN|LSZ|MHL|VEC|VER|VIE|OVL|ANK|OVP|SBG|UEM|UER|WLG|GMN|NVP|RDG|RÜG|DAU|FKB|WAF|WAK|SLZ|WEN|SOG|APD|WUG|GUN|ESW|WIZ|WES|DIN|BRA|BÜD|WHV|HWI|GHC|WTM|WOB|WUN|MAK|SEL|OCH|HOT|WDA)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
        },
        'de-LI': function deLI(str) {
          return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
        },
        'pt-PT': function ptPT(str) {
          return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(str);
        },
        'sq-AL': function sqAL(str) {
          return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
        },
        'pt-BR': function ptBR(str) {
          return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
        }
      };

      function isLicensePlate(str, locale) {
        (0, _assertString["default"])(str);

        if (locale in validators) {
          return validators[locale](str);
        } else if (locale === 'any') {
          for (var key in validators) {
            /* eslint guard-for-in: 0 */
            var validator = validators[key];

            if (validator(str)) {
              return true;
            }
          }

          return false;
        }

        throw new Error("Invalid locale '".concat(locale, "'"));
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    1141:
    /*!************************************************!*\
      !*** ./node_modules/validator/lib/isLocale.js ***!
      \************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isLocale;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var localeReg = /^[A-Za-z]{2,4}([_-]([A-Za-z]{4}|[\d]{3}))?([_-]([A-Za-z]{2}|[\d]{3}))?$/;

      function isLocale(str) {
        (0, _assertString["default"])(str);

        if (str === 'en_US_POSIX' || str === 'ca_ES_VALENCIA') {
          return true;
        }

        return localeReg.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    11670:
    /*!***************************************************!*\
      !*** ./node_modules/validator/lib/isLowercase.js ***!
      \***************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isLowercase;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isLowercase(str) {
        (0, _assertString["default"])(str);
        return str === str.toLowerCase();
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    93515:
    /*!****************************************************!*\
      !*** ./node_modules/validator/lib/isMACAddress.js ***!
      \****************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isMACAddress;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var macAddress = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
      var macAddressNoSeparators = /^([0-9a-fA-F]){12}$/;
      var macAddressWithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;

      function isMACAddress(str, options) {
        (0, _assertString["default"])(str);
        /**
         * @deprecated `no_colons` TODO: remove it in the next major
        */

        if (options && (options.no_colons || options.no_separators)) {
          return macAddressNoSeparators.test(str);
        }

        return macAddress.test(str) || macAddressWithDots.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    3018:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/isMD5.js ***!
      \*********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isMD5;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var md5 = /^[a-f0-9]{32}$/;

      function isMD5(str) {
        (0, _assertString["default"])(str);
        return md5.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    7954:
    /*!***************************************************!*\
      !*** ./node_modules/validator/lib/isMagnetURI.js ***!
      \***************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isMagnetURI;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

      function isMagnetURI(url) {
        (0, _assertString["default"])(url);
        return magnetURI.test(url.trim());
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    26305:
    /*!**************************************************!*\
      !*** ./node_modules/validator/lib/isMimeType.js ***!
      \**************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isMimeType;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /*
        Checks if the provided string matches to a correct Media type format (MIME type)
      
        This function only checks is the string format follows the
        etablished rules by the according RFC specifications.
        This function supports 'charset' in textual media types
        (https://tools.ietf.org/html/rfc6657).
      
        This function does not check against all the media types listed
        by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
        because of lightness purposes : it would require to include
        all these MIME types in this librairy, which would weigh it
        significantly. This kind of effort maybe is not worth for the use that
        this function has in this entire librairy.
      
        More informations in the RFC specifications :
        - https://tools.ietf.org/html/rfc2045
        - https://tools.ietf.org/html/rfc2046
        - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
        - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
      */
      // Match simple MIME types
      // NB :
      //   Subtype length must not exceed 100 characters.
      //   This rule does not comply to the RFC specs (what is the max length ?).


      var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len
      // Handle "charset" in "text/*"

      var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
      // Handle "boundary" in "multipart/*"

      var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

      function isMimeType(str) {
        (0, _assertString["default"])(str);
        return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    25144:
    /*!*****************************************************!*\
      !*** ./node_modules/validator/lib/isMobilePhone.js ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isMobilePhone;
      exports.locales = void 0;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /* eslint-disable max-len */


      var phones = {
        'am-AM': /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
        'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
        'ar-BH': /^(\+?973)?(3|6)\d{7}$/,
        'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
        'ar-LB': /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
        'ar-EG': /^((\+?20)|0)?1[0125]\d{8}$/,
        'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
        'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
        'ar-KW': /^(\+?965)[569]\d{7}$/,
        'ar-LY': /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
        'ar-MA': /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
        'ar-OM': /^((\+|00)968)?(9[1-9])\d{6}$/,
        'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
        'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
        'ar-TN': /^(\+?216)?[2459]\d{7}$/,
        'az-AZ': /^(\+994|0)(5[015]|7[07]|99)\d{7}$/,
        'bs-BA': /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
        'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
        'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
        'bn-BD': /^(\+?880|0)1[13456789][0-9]{8}$/,
        'ca-AD': /^(\+376)?[346]\d{5}$/,
        'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
        'de-DE': /^(\+49)?0?[1|3]([0|5][0-45-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
        'de-AT': /^(\+43|0)\d{1,4}\d{3,12}$/,
        'de-CH': /^(\+41|0)([1-9])\d{1,9}$/,
        'de-LU': /^(\+352)?((6\d1)\d{6})$/,
        'el-GR': /^(\+?30|0)?(69\d{8})$/,
        'en-AU': /^(\+?61|0)4\d{8}$/,
        'en-GB': /^(\+?44|0)7\d{9}$/,
        'en-GG': /^(\+?44|0)1481\d{6}$/,
        'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
        'en-HK': /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
        'en-MO': /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
        'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
        'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
        'en-KE': /^(\+?254|0)(7|1)\d{8}$/,
        'en-MT': /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
        'en-MU': /^(\+?230|0)?\d{8}$/,
        'en-NG': /^(\+?234|0)?[789]\d{9}$/,
        'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
        'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
        'en-PH': /^(09|\+639)\d{9}$/,
        'en-RW': /^(\+?250|0)?[7]\d{8}$/,
        'en-SG': /^(\+65)?[3689]\d{7}$/,
        'en-SL': /^(\+?232|0)\d{8}$/,
        'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
        'en-UG': /^(\+?256|0)?[7]\d{8}$/,
        'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
        'en-ZA': /^(\+?27|0)\d{9}$/,
        'en-ZM': /^(\+?26)?09[567]\d{7}$/,
        'en-ZW': /^(\+263)[0-9]{9}$/,
        'es-AR': /^\+?549(11|[2368]\d)\d{8}$/,
        'es-BO': /^(\+?591)?(6|7)\d{7}$/,
        'es-CO': /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
        'es-CL': /^(\+?56|0)[2-9]\d{1}\d{7}$/,
        'es-CR': /^(\+506)?[2-8]\d{7}$/,
        'es-DO': /^(\+?1)?8[024]9\d{7}$/,
        'es-HN': /^(\+?504)?[9|8]\d{7}$/,
        'es-EC': /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
        'es-ES': /^(\+?34)?[6|7]\d{8}$/,
        'es-PE': /^(\+?51)?9\d{8}$/,
        'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
        'es-PA': /^(\+?507)\d{7,8}$/,
        'es-PY': /^(\+?595|0)9[9876]\d{7}$/,
        'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
        'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
        'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
        'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
        'fj-FJ': /^(\+?679)?\s?\d{3}\s?\d{4}$/,
        'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
        'fr-FR': /^(\+?33|0)[67]\d{8}$/,
        'fr-GF': /^(\+?594|0|00594)[67]\d{8}$/,
        'fr-GP': /^(\+?590|0|00590)[67]\d{8}$/,
        'fr-MQ': /^(\+?596|0|00596)[67]\d{8}$/,
        'fr-RE': /^(\+?262|0|00262)[67]\d{8}$/,
        'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
        'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
        'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
        'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
        'it-SM': /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
        'ja-JP': /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
        'ka-GE': /^(\+?995)?(5|79)\d{7}$/,
        'kk-KZ': /^(\+?7|8)?7\d{9}$/,
        'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
        'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
        'lt-LT': /^(\+370|8)\d{8}$/,
        'lv-LV': /^(\+?371)2\d{7}$/,
        'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
        'mz-MZ': /^(\+?258)?8[234567]\d{7}$/,
        'nb-NO': /^(\+?47)?[49]\d{7}$/,
        'ne-NP': /^(\+?977)?9[78]\d{8}$/,
        'nl-BE': /^(\+?32|0)4?\d{8}$/,
        'nl-NL': /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
        'nn-NO': /^(\+?47)?[49]\d{7}$/,
        'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
        'pt-BR': /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[2-9]{1}\d{3}\-?\d{4}))$/,
        'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
        'pt-AO': /^(\+244)\d{9}$/,
        'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
        'ru-RU': /^(\+?7|8)?9\d{9}$/,
        'si-LK': /^(?:0|94|\+94)?(7(0|1|2|5|6|7|8)( |-)?\d)\d{6}$/,
        'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
        'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        'sq-AL': /^(\+355|0)6[789]\d{6}$/,
        'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
        'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
        'th-TH': /^(\+66|66|0)\d{9}$/,
        'tr-TR': /^(\+?90|0)?5\d{9}$/,
        'uk-UA': /^(\+?38|8)?0\d{9}$/,
        'uz-UZ': /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
        'vi-VN': /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
        'zh-CN': /^((\+|00)86)?1([3456789][0-9]|4[579]|6[67]|7[01235678]|9[012356789])[0-9]{8}$/,
        'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
      };
      /* eslint-enable max-len */
      // aliases

      phones['en-CA'] = phones['en-US'];
      phones['fr-CA'] = phones['en-CA'];
      phones['fr-BE'] = phones['nl-BE'];
      phones['zh-HK'] = phones['en-HK'];
      phones['zh-MO'] = phones['en-MO'];
      phones['ga-IE'] = phones['en-IE'];
      phones['fr-CH'] = phones['de-CH'];
      phones['it-CH'] = phones['fr-CH'];

      function isMobilePhone(str, locale, options) {
        (0, _assertString["default"])(str);

        if (options && options.strictMode && !str.startsWith('+')) {
          return false;
        }

        if (Array.isArray(locale)) {
          return locale.some(function (key) {
            // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
            // istanbul ignore else
            if (phones.hasOwnProperty(key)) {
              var phone = phones[key];

              if (phone.test(str)) {
                return true;
              }
            }

            return false;
          });
        } else if (locale in phones) {
          return phones[locale].test(str); // alias falsey locale as 'any'
        } else if (!locale || locale === 'any') {
          for (var key in phones) {
            // istanbul ignore else
            if (phones.hasOwnProperty(key)) {
              var phone = phones[key];

              if (phone.test(str)) {
                return true;
              }
            }
          }

          return false;
        }

        throw new Error("Invalid locale '".concat(locale, "'"));
      }

      var locales = Object.keys(phones);
      exports.locales = locales;
      /***/
    },

    /***/
    48578:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/isMongoId.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isMongoId;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _isHexadecimal = _interopRequireDefault(__webpack_require__(
      /*! ./isHexadecimal */
      75204));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isMongoId(str) {
        (0, _assertString["default"])(str);
        return (0, _isHexadecimal["default"])(str) && str.length === 24;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    86853:
    /*!***************************************************!*\
      !*** ./node_modules/validator/lib/isMultibyte.js ***!
      \***************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isMultibyte;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /* eslint-disable no-control-regex */


      var multibyte = /[^\x00-\x7F]/;
      /* eslint-enable no-control-regex */

      function isMultibyte(str) {
        (0, _assertString["default"])(str);
        return multibyte.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    98356:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/isNumeric.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isNumeric;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _alpha = __webpack_require__(
      /*! ./alpha */
      50395);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var numericNoSymbols = /^[0-9]+$/;

      function isNumeric(str, options) {
        (0, _assertString["default"])(str);

        if (options && options.no_symbols) {
          return numericNoSymbols.test(str);
        }

        return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : '.', "])?[0-9]+$")).test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    54583:
    /*!***********************************************!*\
      !*** ./node_modules/validator/lib/isOctal.js ***!
      \***********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isOctal;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var octal = /^(0o)?[0-7]+$/i;

      function isOctal(str) {
        (0, _assertString["default"])(str);
        return octal.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    53715:
    /*!********************************************************!*\
      !*** ./node_modules/validator/lib/isPassportNumber.js ***!
      \********************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isPassportNumber;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Reference:
       * https://en.wikipedia.org/ -- Wikipedia
       * https://docs.microsoft.com/en-us/microsoft-365/compliance/eu-passport-number -- EU Passport Number
       * https://countrycode.org/ -- Country Codes
       */


      var passportRegexByCountryCode = {
        AM: /^[A-Z]{2}\d{7}$/,
        // ARMENIA
        AR: /^[A-Z]{3}\d{6}$/,
        // ARGENTINA
        AT: /^[A-Z]\d{7}$/,
        // AUSTRIA
        AU: /^[A-Z]\d{7}$/,
        // AUSTRALIA
        BE: /^[A-Z]{2}\d{6}$/,
        // BELGIUM
        BG: /^\d{9}$/,
        // BULGARIA
        BR: /^[A-Z]{2}\d{6}$/,
        // BRAZIL
        BY: /^[A-Z]{2}\d{7}$/,
        // BELARUS
        CA: /^[A-Z]{2}\d{6}$/,
        // CANADA
        CH: /^[A-Z]\d{7}$/,
        // SWITZERLAND
        CN: /^[GE]\d{8}$/,
        // CHINA [G=Ordinary, E=Electronic] followed by 8-digits
        CY: /^[A-Z](\d{6}|\d{8})$/,
        // CYPRUS
        CZ: /^\d{8}$/,
        // CZECH REPUBLIC
        DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
        // GERMANY
        DK: /^\d{9}$/,
        // DENMARK
        DZ: /^\d{9}$/,
        // ALGERIA
        EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
        // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
        ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
        // SPAIN
        FI: /^[A-Z]{2}\d{7}$/,
        // FINLAND
        FR: /^\d{2}[A-Z]{2}\d{5}$/,
        // FRANCE
        GB: /^\d{9}$/,
        // UNITED KINGDOM
        GR: /^[A-Z]{2}\d{7}$/,
        // GREECE
        HR: /^\d{9}$/,
        // CROATIA
        HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
        // HUNGARY
        IE: /^[A-Z0-9]{2}\d{7}$/,
        // IRELAND
        IN: /^[A-Z]{1}-?\d{7}$/,
        // INDIA
        IR: /^[A-Z]\d{8}$/,
        // IRAN
        IS: /^(A)\d{7}$/,
        // ICELAND
        IT: /^[A-Z0-9]{2}\d{7}$/,
        // ITALY
        JP: /^[A-Z]{2}\d{7}$/,
        // JAPAN
        KR: /^[MS]\d{8}$/,
        // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
        LT: /^[A-Z0-9]{8}$/,
        // LITHUANIA
        LU: /^[A-Z0-9]{8}$/,
        // LUXEMBURG
        LV: /^[A-Z0-9]{2}\d{7}$/,
        // LATVIA
        LY: /^[A-Z0-9]{8}$/,
        // LIBYA
        MT: /^\d{7}$/,
        // MALTA
        MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
        // MOZAMBIQUE
        MY: /^[AHK]\d{8}$/,
        // MALAYSIA
        NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
        // NETHERLANDS
        PO: /^[A-Z]{2}\d{7}$/,
        // POLAND
        PT: /^[A-Z]\d{6}$/,
        // PORTUGAL
        RO: /^\d{8,9}$/,
        // ROMANIA
        RU: /^\d{2}\d{2}\d{6}$/,
        // RUSSIAN FEDERATION
        SE: /^\d{8}$/,
        // SWEDEN
        SL: /^(P)[A-Z]\d{7}$/,
        // SLOVANIA
        SK: /^[0-9A-Z]\d{7}$/,
        // SLOVAKIA
        TR: /^[A-Z]\d{8}$/,
        // TURKEY
        UA: /^[A-Z]{2}\d{6}$/,
        // UKRAINE
        US: /^\d{9}$/ // UNITED STATES

      };
      /**
       * Check if str is a valid passport number
       * relative to provided ISO Country Code.
       *
       * @param {string} str
       * @param {string} countryCode
       * @return {boolean}
       */

      function isPassportNumber(str, countryCode) {
        (0, _assertString["default"])(str);
        /** Remove All Whitespaces, Convert to UPPERCASE */

        var normalizedStr = str.replace(/\s/g, '').toUpperCase();
        return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    65374:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isPort.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isPort;

      var _isInt = _interopRequireDefault(__webpack_require__(
      /*! ./isInt */
      33131));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isPort(str) {
        return (0, _isInt["default"])(str, {
          min: 0,
          max: 65535
        });
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    23379:
    /*!****************************************************!*\
      !*** ./node_modules/validator/lib/isPostalCode.js ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isPostalCode;
      exports.locales = void 0;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      } // common patterns


      var threeDigit = /^\d{3}$/;
      var fourDigit = /^\d{4}$/;
      var fiveDigit = /^\d{5}$/;
      var sixDigit = /^\d{6}$/;
      var patterns = {
        AD: /^AD\d{3}$/,
        AT: fourDigit,
        AU: fourDigit,
        AZ: /^AZ\d{4}$/,
        BE: fourDigit,
        BG: fourDigit,
        BR: /^\d{5}-\d{3}$/,
        BY: /2[1-4]{1}\d{4}$/,
        CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
        CH: fourDigit,
        CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
        CZ: /^\d{3}\s?\d{2}$/,
        DE: fiveDigit,
        DK: fourDigit,
        DO: fiveDigit,
        DZ: fiveDigit,
        EE: fiveDigit,
        ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
        FI: fiveDigit,
        FR: /^\d{2}\s?\d{3}$/,
        GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
        GR: /^\d{3}\s?\d{2}$/,
        HR: /^([1-5]\d{4}$)/,
        HT: /^HT\d{4}$/,
        HU: fourDigit,
        ID: fiveDigit,
        IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
        IL: /^(\d{5}|\d{7})$/,
        IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
        IR: /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
        IS: threeDigit,
        IT: fiveDigit,
        JP: /^\d{3}\-\d{4}$/,
        KE: fiveDigit,
        KR: /^(\d{5}|\d{6})$/,
        LI: /^(948[5-9]|949[0-7])$/,
        LT: /^LT\-\d{5}$/,
        LU: fourDigit,
        LV: /^LV\-\d{4}$/,
        MX: fiveDigit,
        MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
        MY: fiveDigit,
        NL: /^\d{4}\s?[a-z]{2}$/i,
        NO: fourDigit,
        NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
        NZ: fourDigit,
        PL: /^\d{2}\-\d{3}$/,
        PR: /^00[679]\d{2}([ -]\d{4})?$/,
        PT: /^\d{4}\-\d{3}?$/,
        RO: sixDigit,
        RU: sixDigit,
        SA: fiveDigit,
        SE: /^[1-9]\d{2}\s?\d{2}$/,
        SG: sixDigit,
        SI: fourDigit,
        SK: /^\d{3}\s?\d{2}$/,
        TH: fiveDigit,
        TN: fourDigit,
        TW: /^\d{3}(\d{2})?$/,
        UA: fiveDigit,
        US: /^\d{5}(-\d{4})?$/,
        ZA: fourDigit,
        ZM: fiveDigit
      };
      var locales = Object.keys(patterns);
      exports.locales = locales;

      function isPostalCode(str, locale) {
        (0, _assertString["default"])(str);

        if (locale in patterns) {
          return patterns[locale].test(str);
        } else if (locale === 'any') {
          for (var key in patterns) {
            // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
            // istanbul ignore else
            if (patterns.hasOwnProperty(key)) {
              var pattern = patterns[key];

              if (pattern.test(str)) {
                return true;
              }
            }
          }

          return false;
        }

        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      /***/

    },

    /***/
    6213:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/isRFC3339.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isRFC3339;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */


      var dateFullYear = /[0-9]{4}/;
      var dateMonth = /(0[1-9]|1[0-2])/;
      var dateMDay = /([12]\d|0[1-9]|3[01])/;
      var timeHour = /([01][0-9]|2[0-3])/;
      var timeMinute = /[0-5][0-9]/;
      var timeSecond = /([0-5][0-9]|60)/;
      var timeSecFrac = /(\.[0-9]+)?/;
      var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
      var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
      var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
      var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
      var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
      var rfc3339 = new RegExp("".concat(fullDate.source, "[ tT]").concat(fullTime.source));

      function isRFC3339(str) {
        (0, _assertString["default"])(str);
        return rfc3339.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    83465:
    /*!**************************************************!*\
      !*** ./node_modules/validator/lib/isRgbColor.js ***!
      \**************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isRgbColor;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
      var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
      var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/;
      var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;

      function isRgbColor(str) {
        var includePercentValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        (0, _assertString["default"])(str);

        if (!includePercentValues) {
          return rgbColor.test(str) || rgbaColor.test(str);
        }

        return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    68500:
    /*!************************************************!*\
      !*** ./node_modules/validator/lib/isSemVer.js ***!
      \************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isSemVer;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _multilineRegex = _interopRequireDefault(__webpack_require__(
      /*! ./util/multilineRegex */
      67643));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /**
       * Regular Expression to match
       * semantic versioning (SemVer)
       * built from multi-line, multi-parts regexp
       * Reference: https://semver.org/
       */


      var semanticVersioningRegex = (0, _multilineRegex["default"])(['^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)', '(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))', '?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$'], 'i');

      function isSemVer(str) {
        (0, _assertString["default"])(str);
        return semanticVersioningRegex.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    62224:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isSlug.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isSlug;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;

      function isSlug(str) {
        (0, _assertString["default"])(str);
        return charsetRegex.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    10339:
    /*!********************************************************!*\
      !*** ./node_modules/validator/lib/isStrongPassword.js ***!
      \********************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isStrongPassword;

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var upperCaseRegex = /^[A-Z]$/;
      var lowerCaseRegex = /^[a-z]$/;
      var numberRegex = /^[0-9]$/;
      var symbolRegex = /^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
      var defaultOptions = {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10
      };
      /* Counts number of occurrences of each char in a string
       * could be moved to util/ ?
      */

      function countChars(str) {
        var result = {};
        Array.from(str).forEach(function (_char4) {
          var curVal = result[_char4];

          if (curVal) {
            result[_char4] += 1;
          } else {
            result[_char4] = 1;
          }
        });
        return result;
      }
      /* Return information about a password */


      function analyzePassword(password) {
        var charMap = countChars(password);
        var analysis = {
          length: password.length,
          uniqueChars: Object.keys(charMap).length,
          uppercaseCount: 0,
          lowercaseCount: 0,
          numberCount: 0,
          symbolCount: 0
        };
        Object.keys(charMap).forEach(function (_char5) {
          /* istanbul ignore else */
          if (upperCaseRegex.test(_char5)) {
            analysis.uppercaseCount += charMap[_char5];
          } else if (lowerCaseRegex.test(_char5)) {
            analysis.lowercaseCount += charMap[_char5];
          } else if (numberRegex.test(_char5)) {
            analysis.numberCount += charMap[_char5];
          } else if (symbolRegex.test(_char5)) {
            analysis.symbolCount += charMap[_char5];
          }
        });
        return analysis;
      }

      function scorePassword(analysis, scoringOptions) {
        var points = 0;
        points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
        points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;

        if (analysis.lowercaseCount > 0) {
          points += scoringOptions.pointsForContainingLower;
        }

        if (analysis.uppercaseCount > 0) {
          points += scoringOptions.pointsForContainingUpper;
        }

        if (analysis.numberCount > 0) {
          points += scoringOptions.pointsForContainingNumber;
        }

        if (analysis.symbolCount > 0) {
          points += scoringOptions.pointsForContainingSymbol;
        }

        return points;
      }

      function isStrongPassword(str) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        (0, _assertString["default"])(str);
        var analysis = analyzePassword(str);
        options = (0, _merge["default"])(options || {}, defaultOptions);

        if (options.returnScore) {
          return scorePassword(analysis, options);
        }

        return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    79869:
    /*!*******************************************************!*\
      !*** ./node_modules/validator/lib/isSurrogatePair.js ***!
      \*******************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isSurrogatePair;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

      function isSurrogatePair(str) {
        (0, _assertString["default"])(str);
        return surrogatePair.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    20844:
    /*!***********************************************!*\
      !*** ./node_modules/validator/lib/isTaxID.js ***!
      \***********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isTaxID;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var algorithms = _interopRequireWildcard(__webpack_require__(
      /*! ./util/algorithms */
      73585));

      var _isDate = _interopRequireDefault(__webpack_require__(
      /*! ./isDate */
      97448));

      function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function") return null;
        var cache = new WeakMap();

        _getRequireWildcardCache = function _getRequireWildcardCache() {
          return cache;
        };

        return cache;
      }

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }

        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return {
            "default": obj
          };
        }

        var cache = _getRequireWildcardCache();

        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }

        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }

        newObj["default"] = obj;

        if (cache) {
          cache.set(obj, newObj);
        }

        return newObj;
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
      /**
       * TIN Validation
       * Validates Tax Identification Numbers (TINs) from the US, EU member states and the United Kingdom.
       *
       * EU-UK:
       * National TIN validity is calculated using public algorithms as made available by DG TAXUD.
       *
       * See `https://ec.europa.eu/taxation_customs/tin/specs/FS-TIN%20Algorithms-Public.docx` for more information.
       *
       * US:
       * An Employer Identification Number (EIN), also known as a Federal Tax Identification Number,
       *  is used to identify a business entity.
       *
       * NOTES:
       *  - Prefix 47 is being reserved for future use
       *  - Prefixes 26, 27, 45, 46 and 47 were previously assigned by the Philadelphia campus.
       *
       * See `http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes`
       * for more information.
       */
      // Locale functions

      /*
       * bg-BG validation function
       * (Edinen graždanski nomer (EGN/ЕГН), persons only)
       * Checks if birth date (first six digits) is valid and calculates check (last) digit
       */


      function bgBgCheck(tin) {
        // Extract full year, normalize month and check birth date validity
        var century_year = tin.slice(0, 2);
        var month = parseInt(tin.slice(2, 4), 10);

        if (month > 40) {
          month -= 40;
          century_year = "20".concat(century_year);
        } else if (month > 20) {
          month -= 20;
          century_year = "18".concat(century_year);
        } else {
          century_year = "19".concat(century_year);
        }

        if (month < 10) {
          month = "0".concat(month);
        }

        var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));

        if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
          return false;
        } // split digits into an array for further processing


        var digits = tin.split('').map(function (a) {
          return parseInt(a, 10);
        }); // Calculate checksum by multiplying digits with fixed values

        var multip_lookup = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        var checksum = 0;

        for (var i = 0; i < multip_lookup.length; i++) {
          checksum += digits[i] * multip_lookup[i];
        }

        checksum = checksum % 11 === 10 ? 0 : checksum % 11;
        return checksum === digits[9];
      }
      /*
       * cs-CZ validation function
       * (Rodné číslo (RČ), persons only)
       * Checks if birth date (first six digits) is valid and divisibility by 11
       * Material not in DG TAXUD document sourced from:
       * -`https://lorenc.info/3MA381/overeni-spravnosti-rodneho-cisla.htm`
       * -`https://www.mvcr.cz/clanek/rady-a-sluzby-dokumenty-rodne-cislo.aspx`
       */


      function csCzCheck(tin) {
        tin = tin.replace(/\W/, ''); // Extract full year from TIN length

        var full_year = parseInt(tin.slice(0, 2), 10);

        if (tin.length === 10) {
          if (full_year < 54) {
            full_year = "20".concat(full_year);
          } else {
            full_year = "19".concat(full_year);
          }
        } else {
          if (tin.slice(6) === '000') {
            return false;
          } // Three-zero serial not assigned before 1954


          if (full_year < 54) {
            full_year = "19".concat(full_year);
          } else {
            return false; // No 18XX years seen in any of the resources
          }
        } // Add missing zero if needed


        if (full_year.length === 3) {
          full_year = [full_year.slice(0, 2), '0', full_year.slice(2)].join('');
        } // Extract month from TIN and normalize


        var month = parseInt(tin.slice(2, 4), 10);

        if (month > 50) {
          month -= 50;
        }

        if (month > 20) {
          // Month-plus-twenty was only introduced in 2004
          if (parseInt(full_year, 10) < 2004) {
            return false;
          }

          month -= 20;
        }

        if (month < 10) {
          month = "0".concat(month);
        } // Check date validity


        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));

        if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
          return false;
        } // Verify divisibility by 11


        if (tin.length === 10) {
          if (parseInt(tin, 10) % 11 !== 0) {
            // Some numbers up to and including 1985 are still valid if
            // check (last) digit equals 0 and modulo of first 9 digits equals 10
            var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;

            if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
              if (parseInt(tin.slice(9), 10) !== 0) {
                return false;
              }
            } else {
              return false;
            }
          }
        }

        return true;
      }
      /*
       * de-AT validation function
       * (Abgabenkontonummer, persons/entities)
       * Verify TIN validity by calling luhnCheck()
       */


      function deAtCheck(tin) {
        return algorithms.luhnCheck(tin);
      }
      /*
       * de-DE validation function
       * (Steueridentifikationsnummer (Steuer-IdNr.), persons only)
       * Tests for single duplicate/triplicate value, then calculates ISO 7064 check (last) digit
       * Partial implementation of spec (same result with both algorithms always)
       */


      function deDeCheck(tin) {
        // Split digits into an array for further processing
        var digits = tin.split('').map(function (a) {
          return parseInt(a, 10);
        }); // Fill array with strings of number positions

        var occurences = [];

        for (var i = 0; i < digits.length - 1; i++) {
          occurences.push('');

          for (var j = 0; j < digits.length - 1; j++) {
            if (digits[i] === digits[j]) {
              occurences[i] += j;
            }
          }
        } // Remove digits with one occurence and test for only one duplicate/triplicate


        occurences = occurences.filter(function (a) {
          return a.length > 1;
        });

        if (occurences.length !== 2 && occurences.length !== 3) {
          return false;
        } // In case of triplicate value only two digits are allowed next to each other


        if (occurences[0].length === 3) {
          var trip_locations = occurences[0].split('').map(function (a) {
            return parseInt(a, 10);
          });
          var recurrent = 0; // Amount of neighbour occurences

          for (var _i = 0; _i < trip_locations.length - 1; _i++) {
            if (trip_locations[_i] + 1 === trip_locations[_i + 1]) {
              recurrent += 1;
            }
          }

          if (recurrent === 2) {
            return false;
          }
        }

        return algorithms.iso7064Check(tin);
      }
      /*
       * dk-DK validation function
       * (CPR-nummer (personnummer), persons only)
       * Checks if birth date (first six digits) is valid and assigned to century (seventh) digit,
       * and calculates check (last) digit
       */


      function dkDkCheck(tin) {
        tin = tin.replace(/\W/, ''); // Extract year, check if valid for given century digit and add century

        var year = parseInt(tin.slice(4, 6), 10);
        var century_digit = tin.slice(6, 7);

        switch (century_digit) {
          case '0':
          case '1':
          case '2':
          case '3':
            year = "19".concat(year);
            break;

          case '4':
          case '9':
            if (year < 37) {
              year = "20".concat(year);
            } else {
              year = "19".concat(year);
            }

            break;

          default:
            if (year < 37) {
              year = "20".concat(year);
            } else if (year > 58) {
              year = "18".concat(year);
            } else {
              return false;
            }

            break;
        } // Add missing zero if needed


        if (year.length === 3) {
          year = [year.slice(0, 2), '0', year.slice(2)].join('');
        } // Check date validity


        var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));

        if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
          return false;
        } // Split digits into an array for further processing


        var digits = tin.split('').map(function (a) {
          return parseInt(a, 10);
        });
        var checksum = 0;
        var weight = 4; // Multiply by weight and add to checksum

        for (var i = 0; i < 9; i++) {
          checksum += digits[i] * weight;
          weight -= 1;

          if (weight === 1) {
            weight = 7;
          }
        }

        checksum %= 11;

        if (checksum === 1) {
          return false;
        }

        return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
      }
      /*
       * el-CY validation function
       * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons only)
       * Verify TIN validity by calculating ASCII value of check (last) character
       */


      function elCyCheck(tin) {
        // split digits into an array for further processing
        var digits = tin.slice(0, 8).split('').map(function (a) {
          return parseInt(a, 10);
        });
        var checksum = 0; // add digits in even places

        for (var i = 1; i < digits.length; i += 2) {
          checksum += digits[i];
        } // add digits in odd places


        for (var _i2 = 0; _i2 < digits.length; _i2 += 2) {
          if (digits[_i2] < 2) {
            checksum += 1 - digits[_i2];
          } else {
            checksum += 2 * (digits[_i2] - 2) + 5;

            if (digits[_i2] > 4) {
              checksum += 2;
            }
          }
        }

        return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
      }
      /*
       * el-GR validation function
       * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons/entities)
       * Verify TIN validity by calculating check (last) digit
       * Algorithm not in DG TAXUD document- sourced from:
       * - `http://epixeirisi.gr/%CE%9A%CE%A1%CE%99%CE%A3%CE%99%CE%9C%CE%91-%CE%98%CE%95%CE%9C%CE%91%CE%A4%CE%91-%CE%A6%CE%9F%CE%A1%CE%9F%CE%9B%CE%9F%CE%93%CE%99%CE%91%CE%A3-%CE%9A%CE%91%CE%99-%CE%9B%CE%9F%CE%93%CE%99%CE%A3%CE%A4%CE%99%CE%9A%CE%97%CE%A3/23791/%CE%91%CF%81%CE%B9%CE%B8%CE%BC%CF%8C%CF%82-%CE%A6%CE%BF%CF%81%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CE%BA%CE%BF%CF%8D-%CE%9C%CE%B7%CF%84%CF%81%CF%8E%CE%BF%CF%85`
       */


      function elGrCheck(tin) {
        // split digits into an array for further processing
        var digits = tin.split('').map(function (a) {
          return parseInt(a, 10);
        });
        var checksum = 0;

        for (var i = 0; i < 8; i++) {
          checksum += digits[i] * Math.pow(2, 8 - i);
        }

        return checksum % 11 % 10 === digits[8];
      }
      /*
       * en-GB validation function (should go here if needed)
       * (National Insurance Number (NINO) or Unique Taxpayer Reference (UTR),
       * persons/entities respectively)
       */

      /*
       * en-IE validation function
       * (Personal Public Service Number (PPS No), persons only)
       * Verify TIN validity by calculating check (second to last) character
       */


      function enIeCheck(tin) {
        var checksum = algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 7).map(function (a) {
          return parseInt(a, 10);
        }), 8);

        if (tin.length === 9 && tin[8] !== 'W') {
          checksum += (tin[8].charCodeAt(0) - 64) * 9;
        }

        checksum %= 23;

        if (checksum === 0) {
          return tin[7].toUpperCase() === 'W';
        }

        return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
      } // Valid US IRS campus prefixes


      var enUsCampusPrefix = {
        andover: ['10', '12'],
        atlanta: ['60', '67'],
        austin: ['50', '53'],
        brookhaven: ['01', '02', '03', '04', '05', '06', '11', '13', '14', '16', '21', '22', '23', '25', '34', '51', '52', '54', '55', '56', '57', '58', '59', '65'],
        cincinnati: ['30', '32', '35', '36', '37', '38', '61'],
        fresno: ['15', '24'],
        internet: ['20', '26', '27', '45', '46', '47'],
        kansas: ['40', '44'],
        memphis: ['94', '95'],
        ogden: ['80', '90'],
        philadelphia: ['33', '39', '41', '42', '43', '46', '48', '62', '63', '64', '66', '68', '71', '72', '73', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '88', '91', '92', '93', '98', '99'],
        sba: ['31']
      }; // Return an array of all US IRS campus prefixes

      function enUsGetPrefixes() {
        var prefixes = [];

        for (var location in enUsCampusPrefix) {
          // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
          // istanbul ignore else
          if (enUsCampusPrefix.hasOwnProperty(location)) {
            prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
          }
        }

        return prefixes;
      }
      /*
       * en-US validation function
       * Verify that the TIN starts with a valid IRS campus prefix
       */


      function enUsCheck(tin) {
        return enUsGetPrefixes().indexOf(tin.substr(0, 2)) !== -1;
      }
      /*
       * es-ES validation function
       * (Documento Nacional de Identidad (DNI)
       * or Número de Identificación de Extranjero (NIE), persons only)
       * Verify TIN validity by calculating check (last) character
       */


      function esEsCheck(tin) {
        // Split characters into an array for further processing
        var chars = tin.toUpperCase().split(''); // Replace initial letter if needed

        if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
          var lead_replace = 0;

          switch (chars[0]) {
            case 'Y':
              lead_replace = 1;
              break;

            case 'Z':
              lead_replace = 2;
              break;

            default:
          }

          chars.splice(0, 1, lead_replace); // Fill with zeros if smaller than proper
        } else {
          while (chars.length < 9) {
            chars.unshift(0);
          }
        } // Calculate checksum and check according to lookup


        var lookup = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        chars = chars.join('');
        var checksum = parseInt(chars.slice(0, 8), 10) % 23;
        return chars[8] === lookup[checksum];
      }
      /*
       * et-EE validation function
       * (Isikukood (IK), persons only)
       * Checks if birth date (century digit and six following) is valid and calculates check (last) digit
       * Material not in DG TAXUD document sourced from:
       * - `https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Estonia-TIN.pdf`
       */


      function etEeCheck(tin) {
        // Extract year and add century
        var full_year = tin.slice(1, 3);
        var century_digit = tin.slice(0, 1);

        switch (century_digit) {
          case '1':
          case '2':
            full_year = "18".concat(full_year);
            break;

          case '3':
          case '4':
            full_year = "19".concat(full_year);
            break;

          default:
            full_year = "20".concat(full_year);
            break;
        } // Check date validity


        var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));

        if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
          return false;
        } // Split digits into an array for further processing


        var digits = tin.split('').map(function (a) {
          return parseInt(a, 10);
        });
        var checksum = 0;
        var weight = 1; // Multiply by weight and add to checksum

        for (var i = 0; i < 10; i++) {
          checksum += digits[i] * weight;
          weight += 1;

          if (weight === 10) {
            weight = 1;
          }
        } // Do again if modulo 11 of checksum is 10


        if (checksum % 11 === 10) {
          checksum = 0;
          weight = 3;

          for (var _i3 = 0; _i3 < 10; _i3++) {
            checksum += digits[_i3] * weight;
            weight += 1;

            if (weight === 10) {
              weight = 1;
            }
          }

          if (checksum % 11 === 10) {
            return digits[10] === 0;
          }
        }

        return checksum % 11 === digits[10];
      }
      /*
       * fi-FI validation function
       * (Henkilötunnus (HETU), persons only)
       * Checks if birth date (first six digits plus century symbol) is valid
       * and calculates check (last) digit
       */


      function fiFiCheck(tin) {
        // Extract year and add century
        var full_year = tin.slice(4, 6);
        var century_symbol = tin.slice(6, 7);

        switch (century_symbol) {
          case '+':
            full_year = "18".concat(full_year);
            break;

          case '-':
            full_year = "19".concat(full_year);
            break;

          default:
            full_year = "20".concat(full_year);
            break;
        } // Check date validity


        var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));

        if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
          return false;
        } // Calculate check character


        var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;

        if (checksum < 10) {
          return checksum === parseInt(tin.slice(10), 10);
        }

        checksum -= 10;
        var letters_lookup = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
        return letters_lookup[checksum] === tin.slice(10);
      }
      /*
       * fr/nl-BE validation function
       * (Numéro national (N.N.), persons only)
       * Checks if birth date (first six digits) is valid and calculates check (last two) digits
       */


      function frBeCheck(tin) {
        // Zero month/day value is acceptable
        if (tin.slice(2, 4) !== '00' || tin.slice(4, 6) !== '00') {
          // Extract date from first six digits of TIN
          var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));

          if (!(0, _isDate["default"])(date, 'YY/MM/DD')) {
            return false;
          }
        }

        var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
        var checkdigits = parseInt(tin.slice(9, 11), 10);

        if (checksum !== checkdigits) {
          checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;

          if (checksum !== checkdigits) {
            return false;
          }
        }

        return true;
      }
      /*
       * fr-FR validation function
       * (Numéro fiscal de référence (numéro SPI), persons only)
       * Verify TIN validity by calculating check (last three) digits
       */


      function frFrCheck(tin) {
        tin = tin.replace(/\s/g, '');
        var checksum = parseInt(tin.slice(0, 10), 10) % 511;
        var checkdigits = parseInt(tin.slice(10, 13), 10);
        return checksum === checkdigits;
      }
      /*
       * fr/lb-LU validation function
       * (numéro d’identification personnelle, persons only)
       * Verify birth date validity and run Luhn and Verhoeff checks
       */


      function frLuCheck(tin) {
        // Extract date and check validity
        var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));

        if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
          return false;
        } // Run Luhn check


        if (!algorithms.luhnCheck(tin.slice(0, 12))) {
          return false;
        } // Remove Luhn check digit and run Verhoeff check


        return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
      }
      /*
       * hr-HR validation function
       * (Osobni identifikacijski broj (OIB), persons/entities)
       * Verify TIN validity by calling iso7064Check(digits)
       */


      function hrHrCheck(tin) {
        return algorithms.iso7064Check(tin);
      }
      /*
       * hu-HU validation function
       * (Adóazonosító jel, persons only)
       * Verify TIN validity by calculating check (last) digit
       */


      function huHuCheck(tin) {
        // split digits into an array for further processing
        var digits = tin.split('').map(function (a) {
          return parseInt(a, 10);
        });
        var checksum = 8;

        for (var i = 1; i < 9; i++) {
          checksum += digits[i] * (i + 1);
        }

        return checksum % 11 === digits[9];
      }
      /*
       * lt-LT validation function (should go here if needed)
       * (Asmens kodas, persons/entities respectively)
       * Current validation check is alias of etEeCheck- same format applies
       */

      /*
       * it-IT first/last name validity check
       * Accepts it-IT TIN-encoded names as a three-element character array and checks their validity
       * Due to lack of clarity between resources ("Are only Italian consonants used?
       * What happens if a person has X in their name?" etc.) only two test conditions
       * have been implemented:
       * Vowels may only be followed by other vowels or an X character
       * and X characters after vowels may only be followed by other X characters.
       */


      function itItNameCheck(name) {
        // true at the first occurence of a vowel
        var vowelflag = false; // true at the first occurence of an X AFTER vowel
        // (to properly handle last names with X as consonant)

        var xflag = false;

        for (var i = 0; i < 3; i++) {
          if (!vowelflag && /[AEIOU]/.test(name[i])) {
            vowelflag = true;
          } else if (!xflag && vowelflag && name[i] === 'X') {
            xflag = true;
          } else if (i > 0) {
            if (vowelflag && !xflag) {
              if (!/[AEIOU]/.test(name[i])) {
                return false;
              }
            }

            if (xflag) {
              if (!/X/.test(name[i])) {
                return false;
              }
            }
          }
        }

        return true;
      }
      /*
       * it-IT validation function
       * (Codice fiscale (TIN-IT), persons only)
       * Verify name, birth date and codice catastale validity
       * and calculate check character.
       * Material not in DG-TAXUD document sourced from:
       * `https://en.wikipedia.org/wiki/Italian_fiscal_code`
       */


      function itItCheck(tin) {
        // Capitalize and split characters into an array for further processing
        var chars = tin.toUpperCase().split(''); // Check first and last name validity calling itItNameCheck()

        if (!itItNameCheck(chars.slice(0, 3))) {
          return false;
        }

        if (!itItNameCheck(chars.slice(3, 6))) {
          return false;
        } // Convert letters in number spaces back to numbers if any


        var number_locations = [6, 7, 9, 10, 12, 13, 14];
        var number_replace = {
          L: '0',
          M: '1',
          N: '2',
          P: '3',
          Q: '4',
          R: '5',
          S: '6',
          T: '7',
          U: '8',
          V: '9'
        };

        for (var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++) {
          var i = _number_locations[_i4];

          if (chars[i] in number_replace) {
            chars.splice(i, 1, number_replace[chars[i]]);
          }
        } // Extract month and day, and check date validity


        var month_replace = {
          A: '01',
          B: '02',
          C: '03',
          D: '04',
          E: '05',
          H: '06',
          L: '07',
          M: '08',
          P: '09',
          R: '10',
          S: '11',
          T: '12'
        };
        var month = month_replace[chars[8]];
        var day = parseInt(chars[9] + chars[10], 10);

        if (day > 40) {
          day -= 40;
        }

        if (day < 10) {
          day = "0".concat(day);
        }

        var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);

        if (!(0, _isDate["default"])(date, 'YY/MM/DD')) {
          return false;
        } // Calculate check character by adding up even and odd characters as numbers


        var checksum = 0;

        for (var _i5 = 1; _i5 < chars.length - 1; _i5 += 2) {
          var char_to_int = parseInt(chars[_i5], 10);

          if (isNaN(char_to_int)) {
            char_to_int = chars[_i5].charCodeAt(0) - 65;
          }

          checksum += char_to_int;
        }

        var odd_convert = {
          // Maps of characters at odd places
          A: 1,
          B: 0,
          C: 5,
          D: 7,
          E: 9,
          F: 13,
          G: 15,
          H: 17,
          I: 19,
          J: 21,
          K: 2,
          L: 4,
          M: 18,
          N: 20,
          O: 11,
          P: 3,
          Q: 6,
          R: 8,
          S: 12,
          T: 14,
          U: 16,
          V: 10,
          W: 22,
          X: 25,
          Y: 24,
          Z: 23,
          0: 1,
          1: 0
        };

        for (var _i6 = 0; _i6 < chars.length - 1; _i6 += 2) {
          var _char_to_int = 0;

          if (chars[_i6] in odd_convert) {
            _char_to_int = odd_convert[chars[_i6]];
          } else {
            var multiplier = parseInt(chars[_i6], 10);
            _char_to_int = 2 * multiplier + 1;

            if (multiplier > 4) {
              _char_to_int += 2;
            }
          }

          checksum += _char_to_int;
        }

        if (String.fromCharCode(65 + checksum % 26) !== chars[15]) {
          return false;
        }

        return true;
      }
      /*
       * lv-LV validation function
       * (Personas kods (PK), persons only)
       * Check validity of birth date and calculate check (last) digit
       * Support only for old format numbers (not starting with '32', issued before 2017/07/01)
       * Material not in DG TAXUD document sourced from:
       * `https://boot.ritakafija.lv/forums/index.php?/topic/88314-personas-koda-algoritms-%C4%8Deksumma/`
       */


      function lvLvCheck(tin) {
        tin = tin.replace(/\W/, ''); // Extract date from TIN

        var day = tin.slice(0, 2);

        if (day !== '32') {
          // No date/checksum check if new format
          var month = tin.slice(2, 4);

          if (month !== '00') {
            // No date check if unknown month
            var full_year = tin.slice(4, 6);

            switch (tin[6]) {
              case '0':
                full_year = "18".concat(full_year);
                break;

              case '1':
                full_year = "19".concat(full_year);
                break;

              default:
                full_year = "20".concat(full_year);
                break;
            } // Check date validity


            var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);

            if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
              return false;
            }
          } // Calculate check digit


          var checksum = 1101;
          var multip_lookup = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

          for (var i = 0; i < tin.length - 1; i++) {
            checksum -= parseInt(tin[i], 10) * multip_lookup[i];
          }

          return parseInt(tin[10], 10) === checksum % 11;
        }

        return true;
      }
      /*
       * mt-MT validation function
       * (Identity Card Number or Unique Taxpayer Reference, persons/entities)
       * Verify Identity Card Number structure (no other tests found)
       */


      function mtMtCheck(tin) {
        if (tin.length !== 9) {
          // No tests for UTR
          var chars = tin.toUpperCase().split(''); // Fill with zeros if smaller than proper

          while (chars.length < 8) {
            chars.unshift(0);
          } // Validate format according to last character


          switch (tin[7]) {
            case 'A':
            case 'P':
              if (parseInt(chars[6], 10) === 0) {
                return false;
              }

              break;

            default:
              {
                var first_part = parseInt(chars.join('').slice(0, 5), 10);

                if (first_part > 32000) {
                  return false;
                }

                var second_part = parseInt(chars.join('').slice(5, 7), 10);

                if (first_part === second_part) {
                  return false;
                }
              }
          }
        }

        return true;
      }
      /*
       * nl-NL validation function
       * (Burgerservicenummer (BSN) or Rechtspersonen Samenwerkingsverbanden Informatie Nummer (RSIN),
       * persons/entities respectively)
       * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
       */


      function nlNlCheck(tin) {
        return algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 8).map(function (a) {
          return parseInt(a, 10);
        }), 9) % 11 === parseInt(tin[8], 10);
      }
      /*
       * pl-PL validation function
       * (Powszechny Elektroniczny System Ewidencji Ludności (PESEL)
       * or Numer identyfikacji podatkowej (NIP), persons/entities)
       * Verify TIN validity by validating birth date (PESEL) and calculating check (last) digit
       */


      function plPlCheck(tin) {
        // NIP
        if (tin.length === 10) {
          // Calculate last digit by multiplying with lookup
          var lookup = [6, 5, 7, 2, 3, 4, 5, 6, 7];
          var _checksum = 0;

          for (var i = 0; i < lookup.length; i++) {
            _checksum += parseInt(tin[i], 10) * lookup[i];
          }

          _checksum %= 11;

          if (_checksum === 10) {
            return false;
          }

          return _checksum === parseInt(tin[9], 10);
        } // PESEL
        // Extract full year using month


        var full_year = tin.slice(0, 2);
        var month = parseInt(tin.slice(2, 4), 10);

        if (month > 80) {
          full_year = "18".concat(full_year);
          month -= 80;
        } else if (month > 60) {
          full_year = "22".concat(full_year);
          month -= 60;
        } else if (month > 40) {
          full_year = "21".concat(full_year);
          month -= 40;
        } else if (month > 20) {
          full_year = "20".concat(full_year);
          month -= 20;
        } else {
          full_year = "19".concat(full_year);
        } // Add leading zero to month if needed


        if (month < 10) {
          month = "0".concat(month);
        } // Check date validity


        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));

        if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
          return false;
        } // Calculate last digit by mulitplying with odd one-digit numbers except 5


        var checksum = 0;
        var multiplier = 1;

        for (var _i7 = 0; _i7 < tin.length - 1; _i7++) {
          checksum += parseInt(tin[_i7], 10) * multiplier % 10;
          multiplier += 2;

          if (multiplier > 10) {
            multiplier = 1;
          } else if (multiplier === 5) {
            multiplier += 2;
          }
        }

        checksum = 10 - checksum % 10;
        return checksum === parseInt(tin[10], 10);
      }
      /*
      * pt-BR validation function
      * (Cadastro de Pessoas Físicas (CPF, persons)
      * Cadastro Nacional de Pessoas Jurídicas (CNPJ, entities)
      * Both inputs will be validated
      */


      function ptBrCheck(tin) {
        tin = tin.replace(/[^\d]+/g, '');
        if (tin === '') return false;

        if (tin.length === 11) {
          var _sum;

          var ramainder;
          _sum = 0;
          tin = tin.replace(/[^\d]+/g, '');
          if ( // Reject known invalid CPFs
          tin === '11111111111' || tin === '22222222222' || tin === '33333333333' || tin === '44444444444' || tin === '55555555555' || tin === '66666666666' || tin === '77777777777' || tin === '88888888888' || tin === '99999999999' || tin === '00000000000') return false;

          for (var i = 1; i <= 9; i++) {
            _sum += parseInt(tin.substring(i - 1, i), 10) * (11 - i);
          }

          ramainder = _sum * 10 % 11;
          if (ramainder === 10 || ramainder === 11) ramainder = 0;
          if (ramainder !== parseInt(tin.substring(9, 10), 10)) return false;
          _sum = 0;

          for (var _i8 = 1; _i8 <= 10; _i8++) {
            _sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
          }

          ramainder = _sum * 10 % 11;
          if (ramainder === 10 || ramainder === 11) ramainder = 0;
          if (ramainder !== parseInt(tin.substring(10, 11), 10)) return false;
          return true;
        }

        if (tin.length !== 14) {
          return false;
        }

        if ( // Reject know invalid CNPJs
        tin === '00000000000000' || tin === '11111111111111' || tin === '22222222222222' || tin === '33333333333333' || tin === '44444444444444' || tin === '55555555555555' || tin === '66666666666666' || tin === '77777777777777' || tin === '88888888888888' || tin === '99999999999999') {
          return false;
        }

        var length = tin.length - 2;
        var identifiers = tin.substring(0, length);
        var verificators = tin.substring(length);
        var sum = 0;
        var pos = length - 7;

        for (var _i9 = length; _i9 >= 1; _i9--) {
          sum += identifiers.charAt(length - _i9) * pos;
          pos -= 1;

          if (pos < 2) {
            pos = 9;
          }
        }

        var result = sum % 11 < 2 ? 0 : 11 - sum % 11;

        if (result !== parseInt(verificators.charAt(0), 10)) {
          return false;
        }

        length += 1;
        identifiers = tin.substring(0, length);
        sum = 0;
        pos = length - 7;

        for (var _i10 = length; _i10 >= 1; _i10--) {
          sum += identifiers.charAt(length - _i10) * pos;
          pos -= 1;

          if (pos < 2) {
            pos = 9;
          }
        }

        result = sum % 11 < 2 ? 0 : 11 - sum % 11;

        if (result !== parseInt(verificators.charAt(1), 10)) {
          return false;
        }

        return true;
      }
      /*
       * pt-PT validation function
       * (Número de identificação fiscal (NIF), persons/entities)
       * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
       */


      function ptPtCheck(tin) {
        var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 8).map(function (a) {
          return parseInt(a, 10);
        }), 9) % 11;

        if (checksum > 9) {
          return parseInt(tin[8], 10) === 0;
        }

        return checksum === parseInt(tin[8], 10);
      }
      /*
       * ro-RO validation function
       * (Cod Numeric Personal (CNP) or Cod de înregistrare fiscală (CIF),
       * persons only)
       * Verify CNP validity by calculating check (last) digit (test not found for CIF)
       * Material not in DG TAXUD document sourced from:
       * `https://en.wikipedia.org/wiki/National_identification_number#Romania`
       */


      function roRoCheck(tin) {
        if (tin.slice(0, 4) !== '9000') {
          // No test found for this format
          // Extract full year using century digit if possible
          var full_year = tin.slice(1, 3);

          switch (tin[0]) {
            case '1':
            case '2':
              full_year = "19".concat(full_year);
              break;

            case '3':
            case '4':
              full_year = "18".concat(full_year);
              break;

            case '5':
            case '6':
              full_year = "20".concat(full_year);
              break;

            default:
          } // Check date validity


          var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));

          if (date.length === 8) {
            if (!(0, _isDate["default"])(date, 'YY/MM/DD')) {
              return false;
            }
          } else if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
            return false;
          } // Calculate check digit


          var digits = tin.split('').map(function (a) {
            return parseInt(a, 10);
          });
          var multipliers = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
          var checksum = 0;

          for (var i = 0; i < multipliers.length; i++) {
            checksum += digits[i] * multipliers[i];
          }

          if (checksum % 11 === 10) {
            return digits[12] === 1;
          }

          return digits[12] === checksum % 11;
        }

        return true;
      }
      /*
       * sk-SK validation function
       * (Rodné číslo (RČ) or bezvýznamové identifikačné číslo (BIČ), persons only)
       * Checks validity of pre-1954 birth numbers (rodné číslo) only
       * Due to the introduction of the pseudo-random BIČ it is not possible to test
       * post-1954 birth numbers without knowing whether they are BIČ or RČ beforehand
       */


      function skSkCheck(tin) {
        if (tin.length === 9) {
          tin = tin.replace(/\W/, '');

          if (tin.slice(6) === '000') {
            return false;
          } // Three-zero serial not assigned before 1954
          // Extract full year from TIN length


          var full_year = parseInt(tin.slice(0, 2), 10);

          if (full_year > 53) {
            return false;
          }

          if (full_year < 10) {
            full_year = "190".concat(full_year);
          } else {
            full_year = "19".concat(full_year);
          } // Extract month from TIN and normalize


          var month = parseInt(tin.slice(2, 4), 10);

          if (month > 50) {
            month -= 50;
          }

          if (month < 10) {
            month = "0".concat(month);
          } // Check date validity


          var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));

          if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
            return false;
          }
        }

        return true;
      }
      /*
       * sl-SI validation function
       * (Davčna številka, persons/entities)
       * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
       */


      function slSiCheck(tin) {
        var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split('').slice(0, 7).map(function (a) {
          return parseInt(a, 10);
        }), 8) % 11;

        if (checksum === 10) {
          return parseInt(tin[7], 10) === 0;
        }

        return checksum === parseInt(tin[7], 10);
      }
      /*
       * sv-SE validation function
       * (Personnummer or samordningsnummer, persons only)
       * Checks validity of birth date and calls luhnCheck() to validate check (last) digit
       */


      function svSeCheck(tin) {
        // Make copy of TIN and normalize to two-digit year form
        var tin_copy = tin.slice(0);

        if (tin.length > 11) {
          tin_copy = tin_copy.slice(2);
        } // Extract date of birth


        var full_year = '';
        var month = tin_copy.slice(2, 4);
        var day = parseInt(tin_copy.slice(4, 6), 10);

        if (tin.length > 11) {
          full_year = tin.slice(0, 4);
        } else {
          full_year = tin.slice(0, 2);

          if (tin.length === 11 && day < 60) {
            // Extract full year from centenarian symbol
            // Should work just fine until year 10000 or so
            var current_year = new Date().getFullYear().toString();
            var current_century = parseInt(current_year.slice(0, 2), 10);
            current_year = parseInt(current_year, 10);

            if (tin[6] === '-') {
              if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) {
                full_year = "".concat(current_century - 1).concat(full_year);
              } else {
                full_year = "".concat(current_century).concat(full_year);
              }
            } else {
              full_year = "".concat(current_century - 1).concat(full_year);

              if (current_year - parseInt(full_year, 10) < 100) {
                return false;
              }
            }
          }
        } // Normalize day and check date validity


        if (day > 60) {
          day -= 60;
        }

        if (day < 10) {
          day = "0".concat(day);
        }

        var date = "".concat(full_year, "/").concat(month, "/").concat(day);

        if (date.length === 8) {
          if (!(0, _isDate["default"])(date, 'YY/MM/DD')) {
            return false;
          }
        } else if (!(0, _isDate["default"])(date, 'YYYY/MM/DD')) {
          return false;
        }

        return algorithms.luhnCheck(tin.replace(/\W/, ''));
      } // Locale lookup objects

      /*
       * Tax id regex formats for various locales
       *
       * Where not explicitly specified in DG-TAXUD document both
       * uppercase and lowercase letters are acceptable.
       */


      var taxIdFormat = {
        'bg-BG': /^\d{10}$/,
        'cs-CZ': /^\d{6}\/{0,1}\d{3,4}$/,
        'de-AT': /^\d{9}$/,
        'de-DE': /^[1-9]\d{10}$/,
        'dk-DK': /^\d{6}-{0,1}\d{4}$/,
        'el-CY': /^[09]\d{7}[A-Z]$/,
        'el-GR': /^([0-4]|[7-9])\d{8}$/,
        'en-GB': /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
        'en-IE': /^\d{7}[A-W][A-IW]{0,1}$/i,
        'en-US': /^\d{2}[- ]{0,1}\d{7}$/,
        'es-ES': /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
        'et-EE': /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
        'fi-FI': /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
        'fr-BE': /^\d{11}$/,
        'fr-FR': /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
        // Conforms both to official spec and provided example
        'fr-LU': /^\d{13}$/,
        'hr-HR': /^\d{11}$/,
        'hu-HU': /^8\d{9}$/,
        'it-IT': /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
        'lv-LV': /^\d{6}-{0,1}\d{5}$/,
        // Conforms both to DG TAXUD spec and original research
        'mt-MT': /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
        'nl-NL': /^\d{9}$/,
        'pl-PL': /^\d{10,11}$/,
        'pt-BR': /^\d{11,14}$/,
        'pt-PT': /^\d{9}$/,
        'ro-RO': /^\d{13}$/,
        'sk-SK': /^\d{6}\/{0,1}\d{3,4}$/,
        'sl-SI': /^[1-9]\d{7}$/,
        'sv-SE': /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/
      }; // taxIdFormat locale aliases

      taxIdFormat['lb-LU'] = taxIdFormat['fr-LU'];
      taxIdFormat['lt-LT'] = taxIdFormat['et-EE'];
      taxIdFormat['nl-BE'] = taxIdFormat['fr-BE']; // Algorithmic tax id check functions for various locales

      var taxIdCheck = {
        'bg-BG': bgBgCheck,
        'cs-CZ': csCzCheck,
        'de-AT': deAtCheck,
        'de-DE': deDeCheck,
        'dk-DK': dkDkCheck,
        'el-CY': elCyCheck,
        'el-GR': elGrCheck,
        'en-IE': enIeCheck,
        'en-US': enUsCheck,
        'es-ES': esEsCheck,
        'et-EE': etEeCheck,
        'fi-FI': fiFiCheck,
        'fr-BE': frBeCheck,
        'fr-FR': frFrCheck,
        'fr-LU': frLuCheck,
        'hr-HR': hrHrCheck,
        'hu-HU': huHuCheck,
        'it-IT': itItCheck,
        'lv-LV': lvLvCheck,
        'mt-MT': mtMtCheck,
        'nl-NL': nlNlCheck,
        'pl-PL': plPlCheck,
        'pt-BR': ptBrCheck,
        'pt-PT': ptPtCheck,
        'ro-RO': roRoCheck,
        'sk-SK': skSkCheck,
        'sl-SI': slSiCheck,
        'sv-SE': svSeCheck
      }; // taxIdCheck locale aliases

      taxIdCheck['lb-LU'] = taxIdCheck['fr-LU'];
      taxIdCheck['lt-LT'] = taxIdCheck['et-EE'];
      taxIdCheck['nl-BE'] = taxIdCheck['fr-BE']; // Regexes for locales where characters should be omitted before checking format

      var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
      var sanitizeRegexes = {
        'de-AT': allsymbols,
        'de-DE': /[\/\\]/g,
        'fr-BE': allsymbols
      }; // sanitizeRegexes locale aliases

      sanitizeRegexes['nl-BE'] = sanitizeRegexes['fr-BE'];
      /*
       * Validator function
       * Return true if the passed string is a valid tax identification number
       * for the specified locale.
       * Throw an error exception if the locale is not supported.
       */

      function isTaxID(str) {
        var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
        (0, _assertString["default"])(str); // Copy TIN to avoid replacement if sanitized

        var strcopy = str.slice(0);

        if (locale in taxIdFormat) {
          if (locale in sanitizeRegexes) {
            strcopy = strcopy.replace(sanitizeRegexes[locale], '');
          }

          if (!taxIdFormat[locale].test(strcopy)) {
            return false;
          }

          if (locale in taxIdCheck) {
            return taxIdCheck[locale](strcopy);
          } // Fallthrough; not all locales have algorithmic checks


          return true;
        }

        throw new Error("Invalid locale '".concat(locale, "'"));
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    15035:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/isURL.js ***!
      \*********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isURL;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _isFQDN = _interopRequireDefault(__webpack_require__(
      /*! ./isFQDN */
      34469));

      var _isIP = _interopRequireDefault(__webpack_require__(
      /*! ./isIP */
      34335));

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      /*
      options for isURL method
      
      require_protocol - if set as true isURL will return false if protocol is not present in the URL
      require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
      protocols - valid protocols can be modified with this option
      require_host - if set as false isURL will not check if host is present in the URL
      require_port - if set as true isURL will check if port is present in the URL
      allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
      validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)
      
      */


      var default_url_options = {
        protocols: ['http', 'https', 'ftp'],
        require_tld: true,
        require_protocol: false,
        require_host: true,
        require_port: false,
        require_valid_protocol: true,
        allow_underscores: false,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        validate_length: true
      };
      var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

      function isRegExp(obj) {
        return Object.prototype.toString.call(obj) === '[object RegExp]';
      }

      function checkHost(host, matches) {
        for (var i = 0; i < matches.length; i++) {
          var match = matches[i];

          if (host === match || isRegExp(match) && match.test(host)) {
            return true;
          }
        }

        return false;
      }

      function isURL(url, options) {
        (0, _assertString["default"])(url);

        if (!url || /[\s<>]/.test(url)) {
          return false;
        }

        if (url.indexOf('mailto:') === 0) {
          return false;
        }

        options = (0, _merge["default"])(options, default_url_options);

        if (options.validate_length && url.length >= 2083) {
          return false;
        }

        var protocol, auth, host, hostname, port, port_str, split, ipv6;
        split = url.split('#');
        url = split.shift();
        split = url.split('?');
        url = split.shift();
        split = url.split('://');

        if (split.length > 1) {
          protocol = split.shift().toLowerCase();

          if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
            return false;
          }
        } else if (options.require_protocol) {
          return false;
        } else if (url.substr(0, 2) === '//') {
          if (!options.allow_protocol_relative_urls) {
            return false;
          }

          split[0] = url.substr(2);
        }

        url = split.join('://');

        if (url === '') {
          return false;
        }

        split = url.split('/');
        url = split.shift();

        if (url === '' && !options.require_host) {
          return true;
        }

        split = url.split('@');

        if (split.length > 1) {
          if (options.disallow_auth) {
            return false;
          }

          if (split[0] === '' || split[0].substr(0, 1) === ':') {
            return false;
          }

          auth = split.shift();

          if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
            return false;
          }
        }

        hostname = split.join('@');
        port_str = null;
        ipv6 = null;
        var ipv6_match = hostname.match(wrapped_ipv6);

        if (ipv6_match) {
          host = '';
          ipv6 = ipv6_match[1];
          port_str = ipv6_match[2] || null;
        } else {
          split = hostname.split(':');
          host = split.shift();

          if (split.length) {
            port_str = split.join(':');
          }
        }

        if (port_str !== null) {
          port = parseInt(port_str, 10);

          if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
            return false;
          }
        } else if (options.require_port) {
          return false;
        }

        if (!(0, _isIP["default"])(host) && !(0, _isFQDN["default"])(host, options) && (!ipv6 || !(0, _isIP["default"])(ipv6, 6))) {
          return false;
        }

        host = host || ipv6;

        if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
          return false;
        }

        if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
          return false;
        }

        return true;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    71672:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/isUUID.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isUUID;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var uuid = {
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      };

      function isUUID(str) {
        var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
        (0, _assertString["default"])(str);
        var pattern = uuid[version];
        return pattern && pattern.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    94980:
    /*!***************************************************!*\
      !*** ./node_modules/validator/lib/isUppercase.js ***!
      \***************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isUppercase;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isUppercase(str) {
        (0, _assertString["default"])(str);
        return str === str.toUpperCase();
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    96578:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/isVAT.js ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isVAT;
      exports.vatMatchers = void 0;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var vatMatchers = {
        GB: /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/,
        IT: /^(IT)?[0-9]{11}$/
      };
      exports.vatMatchers = vatMatchers;

      function isVAT(str, countryCode) {
        (0, _assertString["default"])(str);
        (0, _assertString["default"])(countryCode);

        if (countryCode in vatMatchers) {
          return vatMatchers[countryCode].test(str);
        }

        throw new Error("Invalid country code: '".concat(countryCode, "'"));
      }
      /***/

    },

    /***/
    61104:
    /*!*******************************************************!*\
      !*** ./node_modules/validator/lib/isVariableWidth.js ***!
      \*******************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isVariableWidth;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _isFullWidth = __webpack_require__(
      /*! ./isFullWidth */
      17779);

      var _isHalfWidth = __webpack_require__(
      /*! ./isHalfWidth */
      23487);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isVariableWidth(str) {
        (0, _assertString["default"])(str);
        return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    99651:
    /*!*****************************************************!*\
      !*** ./node_modules/validator/lib/isWhitelisted.js ***!
      \*****************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = isWhitelisted;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function isWhitelisted(str, chars) {
        (0, _assertString["default"])(str);

        for (var i = str.length - 1; i >= 0; i--) {
          if (chars.indexOf(str[i]) === -1) {
            return false;
          }
        }

        return true;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    76618:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/ltrim.js ***!
      \*********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = ltrim;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function ltrim(str, chars) {
        (0, _assertString["default"])(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping

        var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+"), 'g') : /^\s+/g;
        return str.replace(pattern, '');
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    24928:
    /*!***********************************************!*\
      !*** ./node_modules/validator/lib/matches.js ***!
      \***********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = matches;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function matches(str, pattern, modifiers) {
        (0, _assertString["default"])(str);

        if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
          pattern = new RegExp(pattern, modifiers);
        }

        return pattern.test(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    52446:
    /*!******************************************************!*\
      !*** ./node_modules/validator/lib/normalizeEmail.js ***!
      \******************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = normalizeEmail;

      var _merge = _interopRequireDefault(__webpack_require__(
      /*! ./util/merge */
      79047));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      var default_normalize_email_options = {
        // The following options apply to all email addresses
        // Lowercases the local part of the email address.
        // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
        // The domain is always lowercased, as per RFC 1035
        all_lowercase: true,
        // The following conversions are specific to GMail
        // Lowercases the local part of the GMail address (known to be case-insensitive)
        gmail_lowercase: true,
        // Removes dots from the local part of the email address, as that's ignored by GMail
        gmail_remove_dots: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        gmail_remove_subaddress: true,
        // Conversts the googlemail.com domain to gmail.com
        gmail_convert_googlemaildotcom: true,
        // The following conversions are specific to Outlook.com / Windows Live / Hotmail
        // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
        outlookdotcom_lowercase: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        outlookdotcom_remove_subaddress: true,
        // The following conversions are specific to Yahoo
        // Lowercases the local part of the Yahoo address (known to be case-insensitive)
        yahoo_lowercase: true,
        // Removes the subaddress (e.g. "-foo") from the email address
        yahoo_remove_subaddress: true,
        // The following conversions are specific to Yandex
        // Lowercases the local part of the Yandex address (known to be case-insensitive)
        yandex_lowercase: true,
        // The following conversions are specific to iCloud
        // Lowercases the local part of the iCloud address (known to be case-insensitive)
        icloud_lowercase: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        icloud_remove_subaddress: true
      }; // List of domains used by iCloud

      var icloud_domains = ['icloud.com', 'me.com']; // List of domains used by Outlook.com and its predecessors
      // This list is likely incomplete.
      // Partial reference:
      // https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/

      var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com']; // List of domains used by Yahoo Mail
      // This list is likely incomplete

      var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com']; // List of domains used by yandex.ru

      var yandex_domains = ['yandex.ru', 'yandex.ua', 'yandex.kz', 'yandex.com', 'yandex.by', 'ya.ru']; // replace single dots, but not multiple consecutive dots

      function dotsReplacer(match) {
        if (match.length > 1) {
          return match;
        }

        return '';
      }

      function normalizeEmail(email, options) {
        options = (0, _merge["default"])(options, default_normalize_email_options);
        var raw_parts = email.split('@');
        var domain = raw_parts.pop();
        var user = raw_parts.join('@');
        var parts = [user, domain]; // The domain is always lowercased, as it's case-insensitive per RFC 1035

        parts[1] = parts[1].toLowerCase();

        if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
          // Address is GMail
          if (options.gmail_remove_subaddress) {
            parts[0] = parts[0].split('+')[0];
          }

          if (options.gmail_remove_dots) {
            // this does not replace consecutive dots like example..email@gmail.com
            parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
          }

          if (!parts[0].length) {
            return false;
          }

          if (options.all_lowercase || options.gmail_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }

          parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
        } else if (icloud_domains.indexOf(parts[1]) >= 0) {
          // Address is iCloud
          if (options.icloud_remove_subaddress) {
            parts[0] = parts[0].split('+')[0];
          }

          if (!parts[0].length) {
            return false;
          }

          if (options.all_lowercase || options.icloud_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
        } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
          // Address is Outlook.com
          if (options.outlookdotcom_remove_subaddress) {
            parts[0] = parts[0].split('+')[0];
          }

          if (!parts[0].length) {
            return false;
          }

          if (options.all_lowercase || options.outlookdotcom_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
        } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
          // Address is Yahoo
          if (options.yahoo_remove_subaddress) {
            var components = parts[0].split('-');
            parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
          }

          if (!parts[0].length) {
            return false;
          }

          if (options.all_lowercase || options.yahoo_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
        } else if (yandex_domains.indexOf(parts[1]) >= 0) {
          if (options.all_lowercase || options.yandex_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }

          parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preferred
        } else if (options.all_lowercase) {
          // Any other address
          parts[0] = parts[0].toLowerCase();
        }

        return parts.join('@');
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    4823:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/rtrim.js ***!
      \*********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = rtrim;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function rtrim(str, chars) {
        (0, _assertString["default"])(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping

        var pattern = chars ? new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "]+$"), 'g') : /(\s)+$/g;
        return str.replace(pattern, '');
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    59830:
    /*!************************************************!*\
      !*** ./node_modules/validator/lib/stripLow.js ***!
      \************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = stripLow;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      var _blacklist = _interopRequireDefault(__webpack_require__(
      /*! ./blacklist */
      41513));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function stripLow(str, keep_new_lines) {
        (0, _assertString["default"])(str);
        var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
        return (0, _blacklist["default"])(str, chars);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    74416:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/toBoolean.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = toBoolean;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function toBoolean(str, strict) {
        (0, _assertString["default"])(str);

        if (strict) {
          return str === '1' || /^true$/i.test(str);
        }

        return str !== '0' && !/^false$/i.test(str) && str !== '';
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    83686:
    /*!**********************************************!*\
      !*** ./node_modules/validator/lib/toDate.js ***!
      \**********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = toDate;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function toDate(date) {
        (0, _assertString["default"])(date);
        date = Date.parse(date);
        return !isNaN(date) ? new Date(date) : null;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    97:
    /*!***********************************************!*\
      !*** ./node_modules/validator/lib/toFloat.js ***!
      \***********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = toFloat;

      var _isFloat = _interopRequireDefault(__webpack_require__(
      /*! ./isFloat */
      30476));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function toFloat(str) {
        if (!(0, _isFloat["default"])(str)) return NaN;
        return parseFloat(str);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    69012:
    /*!*********************************************!*\
      !*** ./node_modules/validator/lib/toInt.js ***!
      \*********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = toInt;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function toInt(str, radix) {
        (0, _assertString["default"])(str);
        return parseInt(str, radix || 10);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    14442:
    /*!********************************************!*\
      !*** ./node_modules/validator/lib/trim.js ***!
      \********************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = trim;

      var _rtrim = _interopRequireDefault(__webpack_require__(
      /*! ./rtrim */
      4823));

      var _ltrim = _interopRequireDefault(__webpack_require__(
      /*! ./ltrim */
      76618));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function trim(str, chars) {
        return (0, _rtrim["default"])((0, _ltrim["default"])(str, chars), chars);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    46468:
    /*!************************************************!*\
      !*** ./node_modules/validator/lib/unescape.js ***!
      \************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = unescape;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function unescape(str) {
        (0, _assertString["default"])(str);
        return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    73585:
    /*!*******************************************************!*\
      !*** ./node_modules/validator/lib/util/algorithms.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.iso7064Check = iso7064Check;
      exports.luhnCheck = luhnCheck;
      exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
      exports.verhoeffCheck = verhoeffCheck;
      /**
       * Algorithmic validation functions
       * May be used as is or implemented in the workflow of other validators.
       */

      /*
       * ISO 7064 validation function
       * Called with a string of numbers (incl. check digit)
       * to validate according to ISO 7064 (MOD 11, 10).
       */

      function iso7064Check(str) {
        var checkvalue = 10;

        for (var i = 0; i < str.length - 1; i++) {
          checkvalue = (parseInt(str[i], 10) + checkvalue) % 10 === 0 ? 10 * 2 % 11 : (parseInt(str[i], 10) + checkvalue) % 10 * 2 % 11;
        }

        checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
        return checkvalue === parseInt(str[10], 10);
      }
      /*
       * Luhn (mod 10) validation function
       * Called with a string of numbers (incl. check digit)
       * to validate according to the Luhn algorithm.
       */


      function luhnCheck(str) {
        var checksum = 0;
        var second = false;

        for (var i = str.length - 1; i >= 0; i--) {
          if (second) {
            var product = parseInt(str[i], 10) * 2;

            if (product > 9) {
              // sum digits of product and add to checksum
              checksum += product.toString().split('').map(function (a) {
                return parseInt(a, 10);
              }).reduce(function (a, b) {
                return a + b;
              }, 0);
            } else {
              checksum += product;
            }
          } else {
            checksum += parseInt(str[i], 10);
          }

          second = !second;
        }

        return checksum % 10 === 0;
      }
      /*
       * Reverse TIN multiplication and summation helper function
       * Called with an array of single-digit integers and a base multiplier
       * to calculate the sum of the digits multiplied in reverse.
       * Normally used in variations of MOD 11 algorithmic checks.
       */


      function reverseMultiplyAndSum(digits, base) {
        var total = 0;

        for (var i = 0; i < digits.length; i++) {
          total += digits[i] * (base - i);
        }

        return total;
      }
      /*
       * Verhoeff validation helper function
       * Called with a string of numbers
       * to validate according to the Verhoeff algorithm.
       */


      function verhoeffCheck(str) {
        var d_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
        var p_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]]; // Copy (to prevent replacement) and reverse

        var str_copy = str.split('').reverse().join('');
        var checksum = 0;

        for (var i = 0; i < str_copy.length; i++) {
          checksum = d_table[checksum][p_table[i % 8][parseInt(str_copy[i], 10)]];
        }

        return checksum === 0;
      }
      /***/

    },

    /***/
    7169:
    /*!*********************************************************!*\
      !*** ./node_modules/validator/lib/util/assertString.js ***!
      \*********************************************************/

    /***/
    function _(module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = assertString;

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function assertString(input) {
        var isString = typeof input === 'string' || input instanceof String;

        if (!isString) {
          var invalidType = _typeof(input);

          if (input === null) invalidType = 'null';else if (invalidType === 'object') invalidType = input.constructor.name;
          throw new TypeError("Expected a string but received a ".concat(invalidType));
        }
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    17631:
    /*!*****************************************************!*\
      !*** ./node_modules/validator/lib/util/includes.js ***!
      \*****************************************************/

    /***/
    function _(module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;

      var includes = function includes(arr, val) {
        return arr.some(function (arrVal) {
          return val === arrVal;
        });
      };

      var _default = includes;
      exports["default"] = _default;
      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    79047:
    /*!**************************************************!*\
      !*** ./node_modules/validator/lib/util/merge.js ***!
      \**************************************************/

    /***/
    function _(module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = merge;

      function merge() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var defaults = arguments.length > 1 ? arguments[1] : undefined;

        for (var key in defaults) {
          if (typeof obj[key] === 'undefined') {
            obj[key] = defaults[key];
          }
        }

        return obj;
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    67643:
    /*!***********************************************************!*\
      !*** ./node_modules/validator/lib/util/multilineRegex.js ***!
      \***********************************************************/

    /***/
    function _(module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = multilineRegexp;
      /**
       * Build RegExp object from an array
       * of multiple/multi-line regexp parts
       *
       * @param {string[]} parts
       * @param {string} flags
       * @return {object} - RegExp object
       */

      function multilineRegexp(parts, flags) {
        var regexpAsStringLiteral = parts.join('');
        return new RegExp(regexpAsStringLiteral, flags);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    33610:
    /*!*****************************************************!*\
      !*** ./node_modules/validator/lib/util/toString.js ***!
      \*****************************************************/

    /***/
    function _(module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = toString;

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function toString(input) {
        if (_typeof(input) === 'object' && input !== null) {
          if (typeof input.toString === 'function') {
            input = input.toString();
          } else {
            input = '[object Object]';
          }
        } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
          input = '';
        }

        return String(input);
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    90341:
    /*!*************************************************!*\
      !*** ./node_modules/validator/lib/whitelist.js ***!
      \*************************************************/

    /***/
    function _(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = whitelist;

      var _assertString = _interopRequireDefault(__webpack_require__(
      /*! ./util/assertString */
      7169));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }

      function whitelist(str, chars) {
        (0, _assertString["default"])(str);
        return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
      }

      module.exports = exports["default"];
      module.exports["default"] = exports["default"];
      /***/
    },

    /***/
    50159:
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPageRoutingModule": function SignupPageRoutingModule() {
          return (
            /* binding */
            _SignupPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signup.page */
      80771);

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
      }];

      var _SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      _SignupPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SignupPageRoutingModule);
      /***/
    },

    /***/
    77648:
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPageModule": function SignupPageModule() {
          return (
            /* binding */
            _SignupPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signup-routing.module */
      50159);
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.page */
      80771);

      var _SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      _SignupPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
      })], _SignupPageModule);
      /***/
    },

    /***/
    80771:
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPage": function SignupPage() {
          return (
            /* binding */
            _SignupPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./signup.page.html */
      21355);
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.page.scss */
      74194);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! validator */
      62635);
      /* harmony import */


      var validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_4__);

      var _SignupPage = /*#__PURE__*/function () {
        function SignupPage(router, http, toastCtrl) {
          _classCallCheck(this, SignupPage);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.emailid = '';
          this.sellername = '';
          this.mobilenumber = '';
          this.password = '';
          this.emailidRes = false;
          this.usernameRes = false;
          this.mobilenumberRes = false;
          this.passwordRes = false;
          this.isNotMbileAlert = false;
          this.isNotEmailAlert = false;
          this.isUserNameAlert = false;
          this.pwLowercaseAlert = false;
          this.pwUppercaseAlert = false;
          this.pwNumberAlert = false;
          this.pwMinimumAlert = false;
          this.invalidAlert = false;
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isEmail",
          value: function isEmail() {
            this.emailidRes = validator__WEBPACK_IMPORTED_MODULE_4___default().isEmail(this.emailid);

            if (this.emailidRes) {
              this.isNotEmailAlert = false;
            } else {
              this.isNotEmailAlert = true;
            }
          } // isUserName(username) {
          //   console.log(username);
          //   var regex = /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;
          //   this.usernameRes = (regex.test(username));
          //   console.log(this.usernameRes);
          //   if (this.usernameRes) {
          //     this.isUserNameAlert = false
          //   } else {
          //     this.isUserNameAlert = true
          //   }
          //   return regex.test(username);
          // }
          // isMobileNum(mobilenumber) {
          //   console.log(mobilenumber);
          //   var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
          //   this.mobilenumberRes = (regex.test(mobilenumber));
          //   console.log(this.mobilenumberRes);
          //   if (this.mobilenumberRes) {
          //     this.isNotMbileAlert = false
          //   } else {
          //     this.isNotMbileAlert = true
          //   }
          //   return regex.test(mobilenumber);
          // }

        }, {
          key: "passwordValidation",
          value: function passwordValidation(pw) {
            console.log(pw);
            var lowerCaseLetters = /[a-z]/g;
            this.passwordRes = lowerCaseLetters.test(pw);

            if (this.passwordRes) {
              this.pwLowercaseAlert = false;
            } else {
              this.pwLowercaseAlert = true;
            }

            var upperCaseLetters = /[A-Z]/g;
            this.passwordRes = upperCaseLetters.test(pw);

            if (this.passwordRes) {
              this.pwUppercaseAlert = false;
            } else {
              this.pwUppercaseAlert = true;
            }

            var numbers = /[0-9]/g;
            this.passwordRes = numbers.test(pw);

            if (this.passwordRes) {
              this.pwNumberAlert = false;
            } else {
              this.pwNumberAlert = true;
            }

            if (pw.length >= 8) {
              this.pwMinimumAlert = false;
            } else {
              this.pwMinimumAlert = true;
            }

            return numbers.test(pw);
          }
        }, {
          key: "signup",
          value: function signup() {
            var _this = this;

            if (!this.emailidRes) {
              this.isNotEmailAlert = true;
            }

            if (!this.passwordRes) {
              this.invalidAlert = true;
            } // if (!this.usernameRes) {
            //   this.isUserNameAlert = true
            // }
            // if (!this.mobilenumberRes) {
            //   this.isNotMbileAlert = true
            // }
            // if (!this.emailidRes && !this.usernameRes && !this.mobilenumberRes ) {
            //   return false
            // }


            if (!this.emailidRes && !this.passwordRes) {
              return false;
            }

            var userData = {
              seller_name: this.sellername,
              email_id: this.emailid,
              mobile_number: this.mobilenumber,
              password: this.password
            };
            this.http.post('/seller_register', userData).subscribe(function (response) {
              if (response.success == "true") {
                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: function didOpen(toast) {
                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                  }
                });
                Toast.fire({
                  icon: 'success',
                  title: 'Signed in successfully'
                });
                console.log(response);

                _this.navigateSigninPage();
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "navigateSigninPage",
          value: function navigateSigninPage() {
            this.sellername = '';
            this.emailid = '';
            this.mobilenumber = '';
            this.password;
            this.router.navigate(['/tabs']);
          }
        }, {
          key: "signinPage",
          value: function signinPage() {
            this.router.navigate(['/']);
          }
        }]);

        return SignupPage;
      }();

      _SignupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }];
      };

      _SignupPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SignupPage);
      /***/
    },

    /***/
    74194:
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".location {\n  color: #171717;\n  font-size: 12px;\n  margin: 5px;\n}\n\n.get-started {\n  font-size: 20px;\n  color: #171717;\n  margin: 8px;\n}\n\n.create-account {\n  font-size: 10px;\n  margin: 8px;\n}\n\n.tearmsAndCondition {\n  font-size: 10px;\n  margin: 5px;\n}\n\n.signup-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background-color: #FF6000;\n  color: #fff;\n  border: 1px solid #fff;\n}\n\n.tearmsAndCondition {\n  font-size: 10px;\n}\n\nion-label {\n  font-size: 15px !important;\n  color: #6E7989;\n}\n\nion-item {\n  --background: transparent !important;\n}\n\n.condition {\n  font-size: 12px;\n  color: gray;\n  padding: 15px;\n}\n\n.container {\n  margin-top: 95px;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDSDs7QUFDQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUVBOztBQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHQTs7QUFEQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksb0NBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGlDQUFBO0VBS0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFGSTtFQUNJLGFBQUE7QUFJUiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9ue1xuICAgY29sb3I6IzE3MTcxNztcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiAgIG1hcmdpbjo1cHg7XG59XG4uZ2V0LXN0YXJ0ZWR7XG5mb250LXNpemU6IDIwcHg7XG5jb2xvcjogIzE3MTcxNztcbm1hcmdpbjo4cHg7XG59XG4uY3JlYXRlLWFjY291bnR7XG5mb250LXNpemU6IDEwcHg7XG5tYXJnaW46OHB4O1xufVxuLnRlYXJtc0FuZENvbmRpdGlvbntcbiAgICBmb250LXNpemU6MTBweDtcbiAgICBtYXJnaW46NXB4O1xufVxuLy8gLmlucHV0LWZpZWxke1xuLy8gICAgIG1hcmdpbi1sZWZ0IDotMTBweDtcbiAgIFxuLy8gfVxuLnNpZ251cC1idG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6MzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MDAwO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xufVxuLnRlYXJtc0FuZENvbmRpdGlvbntcbiAgICBmb250LXNpemU6MTBweDtcbn1cbmlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6MTVweCAgIWltcG9ydGFudDtcbiAgICBjb2xvcjojNkU3OTg5O1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmNvbmRpdGlvbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6Z3JheTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOjk1cHg7XG59XG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcblxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";
      /***/
    },

    /***/
    21355:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"bg-class\">\n  <div class=\"container\">\n   \n    <div class=\"signin-div \">\n      <div class=\"row mt-4\">\n        <div class=\"col-7\">\n          <p class=\"get-started mt-2\"><b>Getting Started</b></p>\n          <p class=\"create-account\">Create an account to continue!</p>\n        </div>\n        <div class=\"col-5 ion-text-center\" >\n          <img id=\"logo\" style=\"margin-top: -20px;\" height=\"90px\" width=\"95px\" src=\"assets/logo.jpeg\" alt=\"\">\n        </div>\n\n      </div>\n      <div class=\"input-field\">\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon name=\"mail\"></ion-icon> EMAIL\n          </ion-label>\n          <ion-input required (keyup)=\"isEmail()\" [(ngModel)]=\"emailid\"></ion-input>\n          <p *ngIf=\"isNotEmailAlert\" style=\"color:red;font-size: 10px\"> Incorrect Email Address </p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon name=\"person\"></ion-icon> USER NAME\n          </ion-label>\n          <ion-input required [(ngModel)]=\"sellername\"></ion-input>\n          <p *ngIf=\"isUserNameAlert\" style=\"color:red;font-size: 10px\"> Incorrect User name </p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon name=\"call\"></ion-icon>MOBILE\n          </ion-label>\n          <ion-input required [(ngModel)]=\"mobilenumber\" type=\"number\"></ion-input>\n          <p *ngIf=\"isNotMbileAlert\" style=\"color:red;font-size: 10px;\"> Incorrect Mobile number </p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n              fill=\"currentColor\" class=\"bi bi-file-lock2-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M7 6a1 1 0 0 1 2 0v1H7V6z\" />\n              <path\n                d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z\" />\n            </svg> PASSWORD</ion-label>\n          <ion-input required [(ngModel)]=\"password\" (keyup)=\"passwordValidation(password)\" > </ion-input>\n          <p *ngIf=\"pwLowercaseAlert\" style=\"color:red;font-size: 10px;\"> A <b>lowercase</b> letter </p>\n          <p *ngIf=\"pwUppercaseAlert\" style=\"color:red;font-size: 10px;\"> A <b>capital (uppercase)</b> lette</p>\n          <p *ngIf=\"pwNumberAlert\" style=\"color:red;font-size: 10px;\"> A <b>number</b> </p>\n          <p *ngIf=\"pwMinimumAlert\" style=\"color:red;font-size: 10px;\">Minimum <b>8 characters</b> </p>\n          <p *ngIf=\"invalidAlert\" style=\"color:red;font-size: 10px;\"><b>Invalid</b> </p>\n        </ion-item>\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-1 tearmsAndCondition\" style=\"margin-left: 14px;\">\n          <ion-checkbox color=\"danger\"></ion-checkbox>\n        </div>\n        <div class=\"col-8\">\n          <p class=\"tearmsAndCondition\">By creating an account, you agree to our\n            <b> Terms & Conditions</b>\n          </p>\n        </div>\n      </div>\n\n      <div style=\"width:100%; text-align: center;\">\n        <button (click)=\"signup()\" type=\"button\" class=\"btn btn-primary  signup-btn mt-2\">SIGN UP </button>\n      </div>\n      <p style=\"cursor: pointer;\" (click)=\"signinPage()\" class=\"condition ion-text-center\">Already have an account? <b\n          style=\"color:#FF6000\"> Sign in</b></p>\n\n\n    </div>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_signup_signup_module_ts-es5.js.map