class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :encrypted_password, :salt
end
