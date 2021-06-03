// https://github.com/aws-amplify/amplify-js/blob/4e25f923723441c6fb705584fcc3349214806558/packages/amplify-ui-components/src/common/Translations.ts
export default {
  BACK_TO_SIGN_IN: '回到登入頁面',
  CHANGE_PASSWORD_ACTION: '修改',
  CHANGE_PASSWORD: '修改密碼',
  CODE_LABEL: '認證碼',
  CODE_PLACEHOLDER: '輸入認證碼',
  CONFIRM_SIGN_UP_CODE_LABEL: '驗證認證碼',
  CONFIRM_SIGN_UP_CODE_PLACEHOLDER: '輸入認證碼',
  CONFIRM_SIGN_UP_HEADER_TEXT: '驗證註冊',
  CONFIRM_SIGN_UP_LOST_CODE: '找不到認證碼？',
  CONFIRM_SIGN_UP_RESEND_CODE: '重新發送認證碼',
  CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT: '確認',
  CONFIRM_SMS_CODE: '確認簡訊認證碼',
  CONFIRM_TOTP_CODE: '確認TOTP認證碼',
  CONFIRM: '確認',
  CREATE_ACCOUNT_TEXT: '註冊帳號',
  EMAIL_LABEL: '電子信箱 *',
  EMAIL_PLACEHOLDER: '輸入您的電子信箱',
  FORGOT_PASSWORD_TEXT: '忘記密碼？',
  // LESS_THAN_TWO_MFA_VALUES_MESSAGE: 'Less than two mfa types available',
  NEW_PASSWORD_LABEL: '新密碼',
  NEW_PASSWORD_PLACEHOLDER: '輸入您的新密碼',
  NO_ACCOUNT_TEXT: '還沒有註冊？',
  PASSWORD_LABEL: '密碼 *',
  PASSWORD_PLACEHOLDER: '輸入您的密碼',
  PHONE_LABEL: '電話號碼 *',
  PHONE_PLACEHOLDER: '0900-000-000',
  QR_CODE_ALT: 'QR Code',
  RESET_PASSWORD_TEXT: '重設密碼',
  RESET_YOUR_PASSWORD: '重設您的密碼',
  SELECT_MFA_TYPE_HEADER_TEXT: '選擇雙重認證方式',
  SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT: '確認',
  SEND_CODE: '寄送認證碼',
  SUBMIT: '送出',
  // SETUP_TOTP_REQUIRED: 'TOTP needs to be configured',
  SIGN_IN_ACTION: '登入',
  SIGN_IN_HEADER_TEXT: '使用者登入',
  SIGN_IN_TEXT: '登入',
  // SIGN_IN_WITH_AMAZON: 'Sign in with Amazon',
  // SIGN_IN_WITH_AUTH0: 'Sign in with Auth0',
  // SIGN_IN_WITH_AWS: 'Sign in with AWS',
  // SIGN_IN_WITH_FACEBOOK: 'Sign in with Facebook',
  // SIGN_IN_WITH_GOOGLE: 'Sign in with Google',
  SIGN_OUT: '登出',
  SIGN_UP_EMAIL_PLACEHOLDER: '電子信箱',
  SIGN_UP_HAVE_ACCOUNT_TEXT: '已經註冊？',
  SIGN_UP_HEADER_TEXT: '申請新帳號',
  SIGN_UP_PASSWORD_PLACEHOLDER: '密碼',
  SIGN_UP_SUBMIT_BUTTON_TEXT: '申請',
  SIGN_UP_USERNAME_PLACEHOLDER: '帳號',
  // SUCCESS_MFA_TYPE: 'Success! Your MFA Type is now:',
  // TOTP_HEADER_TEXT: 'Scan then enter verification code',
  // TOTP_LABEL: 'Enter Security Code:',
  // TOTP_ISSUER: 'AWSCognito',
  // TOTP_SETUP_FAILURE: 'TOTP Setup has failed',
  // TOTP_SUBMIT_BUTTON_TEXT: 'Verify Security Token',
  // TOTP_SUCCESS_MESSAGE: 'Setup TOTP successfully!',
  // UNABLE_TO_SETUP_MFA_AT_THIS_TIME: 'Failed! Unable to configure MFA at this time',
  USERNAME_LABEL: '帳號 *',
  USERNAME_PLACEHOLDER: '輸入您的帳號',
  VERIFY_CONTACT_EMAIL_LABEL: '電子信箱',
  VERIFY_CONTACT_HEADER_TEXT: '恢復帳號需要認證聯繫方式',
  VERIFY_CONTACT_PHONE_LABEL: '電話號碼',
  VERIFY_CONTACT_SUBMIT_LABEL: '送出',
  VERIFY_CONTACT_VERIFY_LABEL: '驗證',
  // ADDRESS_LABEL: 'Address',
  // ADDRESS_PLACEHOLDER: 'Enter your address',
  // NICKNAME_LABEL: 'Nickname',
  // NICKNAME_PLACEHOLDER: 'Enter your nickname',
  // BIRTHDATE_LABEL: 'Birthday',
  // BIRTHDATE_PLACEHOLDER: 'Enter your birthday',
  // PICTURE_LABEL: 'Picture URL',
  // PICTURE_PLACEHOLDER: 'Enter your picture URL',
  // FAMILY_NAME_LABEL: 'Family Name',
  // FAMILY_NAME_PLACEHOLDER: 'Enter your family name',
  // PREFERRED_USERNAME_LABEL: 'Preferred Username',
  // PREFERRED_USERNAME_PLACEHOLDER: 'Enter your preferred username',
  // GENDER_LABEL: 'Gender',
  // GENDER_PLACEHOLDER: 'Enter your gender',
  // PROFILE_LABEL: 'Profile URL',
  // PROFILE_PLACEHOLDER: 'Enter your profile URL',
  // GIVEN_NAME_LABEL: 'First Name',
  // GIVEN_NAME_PLACEHOLDER: 'Enter your first name',
  // ZONEINFO_LABEL: 'Time zone',
  // ZONEINFO_PLACEHOLDER: 'Enter your time zone',
  // LOCALE_LABEL: 'Locale',
  // LOCALE_PLACEHOLDER: 'Enter your locale',
  // UPDATED_AT_LABEL: 'Updated At',
  // UPDATED_AT_PLACEHOLDER: 'Enter the time the information was last updated',
  // MIDDLE_NAME_LABEL: 'Middle Name',
  // MIDDLE_NAME_PLACEHOLDER: 'Enter your middle name',
  // WEBSITE_LABEL: 'Website',
  // WEBSITE_PLACEHOLDER: 'Enter your website',
  NAME_LABEL: '名字',
  NAME_PLACEHOLDER: '輸入您的名字',
  // PHOTO_PICKER_TITLE: 'Picker Title',
  // PHOTO_PICKER_HINT: 'Ancilliary text or content may occupy this space here',
  // PHOTO_PICKER_PLACEHOLDER_HINT: 'Placeholder hint',
  // PHOTO_PICKER_BUTTON_TEXT: 'Button',
  // IMAGE_PICKER_TITLE: 'Add Profile Photo',
  // IMAGE_PICKER_HINT: 'Preview the image before upload',
  // IMAGE_PICKER_PLACEHOLDER_HINT: 'Tap to image select',
  // IMAGE_PICKER_BUTTON_TEXT: 'Upload',
  // PICKER_TEXT: 'Pick a file',
  // TEXT_FALLBACK_CONTENT: 'Fallback Content',
  CONFIRM_SIGN_UP_FAILED: '驗證註冊失敗',
  SIGN_UP_FAILED: '註冊失敗',
};

// I18n.putVocabulariesForLanguage('en-US',
//   Object.keys(authStrings).reduce((obj, key) => {
//     obj[Translations[key]] = authStrings[key];
//     return obj;
//   }, {}),
// );